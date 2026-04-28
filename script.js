// ==========================================
// STATE MANAGEMENT
// ==========================================

const STORAGE_KEY = 'carpool_manager_state';

let state = {
  settings: {
    defaultFuelPrice: 5.50
  },
  carpoolers: [], // { id, name, phone, totalPaid }
  trips: []       // { id, date, totalCost, individualCosts: {id: cost}, outboundInfo, returnInfo }
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      state = JSON.parse(saved);
      // migrations for old data if needed
      state.carpoolers.forEach(c => {
        if (c.totalPaid === undefined) c.totalPaid = 0;
      });
    } catch (e) {
      console.error('Failed to parse state from local storage', e);
    }
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initTabs();
  initSettings();
  initLogger();
  updateDashboard();
  updateHistory();
});

// ==========================================
// TABS LOGIC
// ==========================================

function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active', 'text-primary', 'border-primary'));
      tabContents.forEach(c => c.classList.add('hidden'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active', 'text-primary', 'border-primary');
      const targetId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      targetContent.classList.remove('hidden');
      targetContent.classList.add('active');

      // Refresh specific tabs when opened
      if (targetId === 'tab-logger') initLogger();
      if (targetId === 'tab-dashboard') updateDashboard();
      if (targetId === 'tab-history') updateHistory();
      if (targetId === 'tab-settings') initSettings();
    });
  });
}

// ==========================================
// SETTINGS LOGIC
// ==========================================

function initSettings() {
  document.getElementById('settings-fuel-price').value = state.settings.defaultFuelPrice.toFixed(2);
  
  const form = document.getElementById('form-add-carpooler');
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('new-carpooler-name').value.trim();
    let phone = document.getElementById('new-carpooler-phone').value.trim();
    
    // clean phone number (digits only)
    phone = phone.replace(/\D/g, '');

    if (name && phone) {
      state.carpoolers.push({
        id: 'user_' + Date.now(),
        name,
        phone,
        totalPaid: 0
      });
      saveState();
      document.getElementById('new-carpooler-name').value = '';
      document.getElementById('new-carpooler-phone').value = '';
      renderCarpoolersSettings();
      initLogger(); // Update checkboxes
    }
  };

  document.getElementById('btn-save-settings').onclick = () => {
    const val = parseFloat(document.getElementById('settings-fuel-price').value);
    if (!isNaN(val) && val >= 0) {
      state.settings.defaultFuelPrice = val;
      saveState();
      alert('Default Fuel Price saved!');
    }
  };

  renderCarpoolersSettings();
}

function renderCarpoolersSettings() {
  const tbody = document.getElementById('settings-carpoolers-body');
  tbody.innerHTML = '';
  
  if (state.carpoolers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="text-center text-gray-500">No carpoolers added yet.</td></tr>`;
    return;
  }

  state.carpoolers.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${c.name}</td>
      <td>${c.phone}</td>
      <td>
        <button class="text-danger hover:text-red-400" onclick="deleteCarpooler('${c.id}')">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.deleteCarpooler = function(id) {
  if(confirm('Are you sure you want to remove this carpooler?')) {
    state.carpoolers = state.carpoolers.filter(c => c.id !== id);
    saveState();
    renderCarpoolersSettings();
  }
}

// ==========================================
// LOGGER LOGIC
// ==========================================

function initLogger() {
  if(document.getElementById('log-fuel-price').value === "") {
    document.getElementById('log-fuel-price').value = state.settings.defaultFuelPrice.toFixed(2);
  }

  // Render Checklists
  renderChecklist('outbound-participants');
  renderChecklist('return-participants');

  // Attach live calculation listeners
  const inputs = document.querySelectorAll('#tab-logger input');
  inputs.forEach(input => {
    input.addEventListener('input', calculatePreview);
    input.addEventListener('change', calculatePreview);
  });

  document.getElementById('btn-save-trip').onclick = saveTrip;

  calculatePreview();
}

function renderChecklist(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  if (state.carpoolers.length === 0) {
    container.innerHTML = `<p class="text-sm text-gray-500">Go to Settings to add participants.</p>`;
    return;
  }

  state.carpoolers.forEach(c => {
    const label = document.createElement('label');
    label.className = 'checkbox-container';
    label.innerHTML = `
      ${c.name}
      <input type="checkbox" value="${c.id}" checked>
      <span class="checkmark"></span>
    `;
    container.appendChild(label);
  });
}

function calculatePreview() {
  const fuelPrice = parseFloat(document.getElementById('log-fuel-price').value) || 0;
  const extra = parseFloat(document.getElementById('log-extra-expenses').value) || 0;
  
  const outDist = parseFloat(document.getElementById('log-outbound-dist').value) || 0;
  const outEff = parseFloat(document.getElementById('log-outbound-eff').value) || 1;
  
  const retDist = parseFloat(document.getElementById('log-return-dist').value) || 0;
  const retEff = parseFloat(document.getElementById('log-return-eff').value) || 1;

  const outIds = Array.from(document.querySelectorAll('#outbound-participants input:checked')).map(el => el.value);
  const retIds = Array.from(document.querySelectorAll('#return-participants input:checked')).map(el => el.value);

  // Math
  const outCost = (outDist / outEff) * fuelPrice;
  const retCost = (retDist / retEff) * fuelPrice;
  const totalCost = outCost + retCost + extra;

  // Split: Driver is +1
  const outDivisor = outIds.length + 1;
  const retDivisor = retIds.length + 1;

  const outPerPerson = outCost / outDivisor;
  const retPerPerson = retCost / retDivisor;

  const uniqueIds = new Set([...outIds, ...retIds]);
  const extraPerPerson = extra / (uniqueIds.size + 1); // Extra split among all present + driver

  let splitsHtml = '';
  let previewSplitsData = {};

  if (uniqueIds.size > 0 || totalCost > 0) {
    state.carpoolers.forEach(c => {
      let cost = 0;
      let breakdown = [];
      if (outIds.includes(c.id)) {
        cost += outPerPerson;
        breakdown.push('Ida');
      }
      if (retIds.includes(c.id)) {
        cost += retPerPerson;
        breakdown.push('Volta');
      }
      if (uniqueIds.has(c.id)) {
        cost += extraPerPerson;
      }

      if (cost > 0) {
        previewSplitsData[c.id] = cost;
        splitsHtml += `<div class="flex justify-between text-sm mb-1 border-b border-surface pb-1">
          <span>${c.name} <span class="text-xs text-gray-500">(${breakdown.join(', ')})</span></span>
          <span class="font-mono">R$ ${cost.toFixed(2)}</span>
        </div>`;
      }
    });

    // Driver slice
    let driverCost = totalCost;
    Object.values(previewSplitsData).forEach(val => driverCost -= val);
    splitsHtml += `<div class="flex justify-between text-sm mt-2 text-gray-400">
      <span>Driver (You)</span>
      <span class="font-mono">R$ ${driverCost.toFixed(2)}</span>
    </div>`;

  } else {
    splitsHtml = '<p class="text-sm text-gray-500 text-center mt-4">Enter distances to see split.</p>';
  }

  document.getElementById('preview-total-cost').innerText = totalCost.toFixed(2);
  document.getElementById('preview-splits').innerHTML = splitsHtml;

  return { totalCost, outCost, retCost, extra, outIds, retIds, outDist, outEff, retDist, retEff, previewSplitsData };
}

function saveTrip() {
  const data = calculatePreview();
  if (data.totalCost <= 0) {
    alert("Cannot save a trip with zero cost.");
    return;
  }

  const trip = {
    id: 'trip_' + Date.now(),
    date: new Date().toISOString(),
    totalCost: data.totalCost,
    outboundInfo: { dist: data.outDist, eff: data.outEff, count: data.outIds.length },
    returnInfo: { dist: data.retDist, eff: data.retEff, count: data.retIds.length },
    individualCosts: data.previewSplitsData,
    outIds: data.outIds,
    retIds: data.retIds
  };

  state.trips.push(trip);
  saveState();

  // Reset Form
  document.getElementById('log-outbound-dist').value = '';
  document.getElementById('log-return-dist').value = '';
  document.getElementById('log-extra-expenses').value = '0.00';
  calculatePreview();
  
  alert("Trip Saved Successfully!");
}

// ==========================================
// DASHBOARD LOGIC
// ==========================================

function updateDashboard() {
  let totalExpenses = 0;
  let carpoolerDebts = {}; // { id: { totalDebt: 0, tripsIda: 0, tripsVolta: 0 } }

  state.carpoolers.forEach(c => {
    carpoolerDebts[c.id] = { totalDebt: 0, tripsIda: 0, tripsVolta: 0 };
  });

  state.trips.forEach(t => {
    totalExpenses += t.totalCost;
    for (const [userId, cost] of Object.entries(t.individualCosts)) {
      if (carpoolerDebts[userId]) {
        carpoolerDebts[userId].totalDebt += cost;
      }
    }
    t.outIds.forEach(id => { if(carpoolerDebts[id]) carpoolerDebts[id].tripsIda++; });
    t.retIds.forEach(id => { if(carpoolerDebts[id]) carpoolerDebts[id].tripsVolta++; });
  });

  document.getElementById('dash-total-expenses').innerText = totalExpenses.toFixed(2);

  let totalOutstanding = 0;
  const tbody = document.getElementById('dash-balances-body');
  tbody.innerHTML = '';

  state.carpoolers.forEach(c => {
    const debt = carpoolerDebts[c.id].totalDebt;
    const paid = c.totalPaid || 0;
    const balance = debt - paid;

    if (balance > 0) totalOutstanding += balance;

    const tr = document.createElement('tr');
    
    // WhatsApp Msg
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1); // Monday
    const dateStr = weekStart.toLocaleDateString();
    
    const msg = `Hey ${c.name}, here is your carpool breakdown for the week of ${dateStr}: Total R$${balance.toFixed(2)}. (Ida: ${carpoolerDebts[c.id].tripsIda} trips, Volta: ${carpoolerDebts[c.id].tripsVolta} trips). Cheers!`;
    const encodedMsg = encodeURIComponent(msg);
    const waLink = `https://wa.me/${c.phone}?text=${encodedMsg}`;

    tr.innerHTML = `
      <td class="font-medium">${c.name}</td>
      <td class="text-sm text-gray-400">${carpoolerDebts[c.id].tripsIda} / ${carpoolerDebts[c.id].tripsVolta}</td>
      <td class="font-mono font-bold ${balance > 0 ? 'text-danger' : 'text-success'}">
        R$ ${balance.toFixed(2)}
      </td>
      <td>
        <div class="flex gap-2">
          ${balance > 0 ? `
            <button class="btn-success text-xs py-1 px-2" onclick="markPaid('${c.id}', ${balance})">
              <i class="fa-solid fa-check"></i> Paid
            </button>
            <a href="${waLink}" target="_blank" class="btn-primary bg-green-600 hover:bg-green-700 text-xs py-1 px-2">
              <i class="fa-brands fa-whatsapp"></i> Send
            </a>
          ` : `
            <span class="text-xs text-gray-500 italic">Settled</span>
          `}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (state.carpoolers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center text-gray-500">No data available.</td></tr>`;
  }

  document.getElementById('dash-total-outstanding').innerText = totalOutstanding.toFixed(2);
}

window.markPaid = function(userId, amount) {
  if(confirm(`Mark R$ ${amount.toFixed(2)} as paid?`)) {
    const user = state.carpoolers.find(c => c.id === userId);
    if (user) {
      user.totalPaid = (user.totalPaid || 0) + amount;
      saveState();
      updateDashboard();
    }
  }
}

// ==========================================
// HISTORY LOGIC
// ==========================================

function updateHistory() {
  const tbody = document.getElementById('history-body');
  tbody.innerHTML = '';

  if (state.trips.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center text-gray-500">No trips logged yet.</td></tr>`;
    return;
  }

  // Sort newest first
  const sortedTrips = [...state.trips].sort((a,b) => new Date(b.date) - new Date(a.date));

  sortedTrips.forEach(t => {
    const dateObj = new Date(t.date);
    const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="whitespace-nowrap">${dateStr}</td>
      <td class="font-mono text-success font-bold">R$ ${t.totalCost.toFixed(2)}</td>
      <td class="text-xs text-gray-400">${t.outboundInfo.dist}km (${t.outboundInfo.eff}km/L) <br> <i class="fa-solid fa-users"></i> ${t.outboundInfo.count} Pax</td>
      <td class="text-xs text-gray-400">${t.returnInfo.dist}km (${t.returnInfo.eff}km/L) <br> <i class="fa-solid fa-users"></i> ${t.returnInfo.count} Pax</td>
      <td>
        <button class="text-danger hover:text-red-400" onclick="deleteTrip('${t.id}')">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.deleteTrip = function(tripId) {
  if (confirm("Are you sure you want to delete this trip record? This will adjust balances.")) {
    state.trips = state.trips.filter(t => t.id !== tripId);
    saveState();
    updateHistory();
    // we also update dashboard just in case, though the tab switch handles it
  }
}
