// ==========================================
// TRANSLATIONS & THEME
// ==========================================

const translations = {
  en: {
    app_title: "Carpool Cost Manager",
    tab_logger: "Logger",
    tab_dashboard: "Dashboard",
    tab_history: "History",
    tab_settings: "Settings",
    log_general_info: "General Information",
    log_fuel_price: "Fuel Price (R$ / L)",
    log_extra_expenses: "Additional Expenses (Tolls, Parking)",
    log_outbound: "Outbound",
    log_return: "Return",
    log_distance: "Distance (km)",
    log_efficiency: "Efficiency (km/L)",
    log_participants: "Participants Present:",
    log_driver_info: "Driver is automatically included in cost split.",
    log_total_trip_cost: "Total Trip Cost",
    log_save_trip: "Save Trip",
    dash_total_expenses: "Total Expenses (All Trips)",
    dash_total_outstanding: "Total Outstanding Balance",
    dash_participant_balances: "Participant Balances",
    table_name: "Name",
    table_trips: "Trips",
    table_unpaid_balance: "Unpaid Balance",
    table_actions: "Actions",
    table_date: "Date",
    table_total_cost: "Total Cost",
    table_outbound_info: "Outbound Info",
    table_return_info: "Return Info",
    table_phone: "Phone (WhatsApp)",
    hist_saved_trips: "Saved Trips",
    set_global_defaults: "Global Defaults",
    set_default_fuel: "Default Fuel Price (R$ / L)",
    set_save: "Save",
    set_manage_carpoolers: "Manage Carpoolers",
    set_name_placeholder: "Name",
    set_phone_placeholder: "Phone (e.g. 5511999999999)",
    set_add: "Add",
    set_join_code: "Admin Join Code",
    set_join_code_placeholder: "Enter code",
    set_pix_key: "PIX Key",
    set_pix_placeholder: "Your PIX key",
    modal_edit_carpooler: "Edit Carpooler",
    modal_edit_trip: "Edit Trip",
    btn_cancel: "Cancel",
    btn_save_changes: "Save Changes",
    loading_message: "Loading...",
    js_alert_error: "An error occurred: {msg}",
    // JS injected
    js_alert_wrong_join_code: "Invalid Join Code. You cannot make edits.",
    js_alert_join_code_saved: "Join code saved.",
    js_error_fetching: "Error fetching data.",
    js_alert_zero_cost: "Cannot save a trip with zero cost.",
    js_alert_invalid_fuel: "Fuel price must be greater than 0.",
    js_alert_invalid_eff: "Efficiency must be greater than 0.",
    js_alert_trip_saved: "Trip Saved Successfully!",
    js_alert_fuel_saved: "Default Fuel Price saved!",
    js_alert_pix_saved: "PIX Key saved!",
    js_confirm_remove_user: "Are you sure you want to remove this carpooler?",
    js_confirm_delete_trip: "Are you sure you want to delete this trip record? This will adjust balances.",
    js_confirm_mark_paid: "Mark R$ {amount} as paid?",
    js_empty_users: "No carpoolers added yet.",
    js_empty_users_settings: "Go to Settings to add participants.",
    js_empty_trips: "No trips logged yet.",
    js_empty_data: "No data available.",
    js_preview_empty: "Enter distances to see split.",
    js_driver_you: "Driver (You)",
    js_btn_paid: "Paid",
    js_btn_send: "Send",
    js_settled: "Settled",
    js_pax: "Pax",
    js_ida: "Outbound",
    js_volta: "Return",
    js_wa_msg: "Fala {name}, aqui é o resumo das suas caronas na semana de {date}: Total R${amount}. (Ida: {ida} viagens, Volta: {volta} viagens). Valeu!"
  },
  pt: {
    app_title: "Gerenciador de Caronas",
    tab_logger: "Registrar",
    tab_dashboard: "Painel",
    tab_history: "Histórico",
    tab_settings: "Configurações",
    log_general_info: "Informações Gerais",
    log_fuel_price: "Preço do Combustível (R$ / L)",
    log_extra_expenses: "Gastos Extras (Pedágio, Estacionamento)",
    log_outbound: "Ida",
    log_return: "Volta",
    log_distance: "Distância (km)",
    log_efficiency: "Eficiência (km/L)",
    log_participants: "Participantes Presentes:",
    log_driver_info: "O motorista é incluído automaticamente na divisão.",
    log_total_trip_cost: "Custo Total da Viagem",
    log_save_trip: "Salvar Viagem",
    dash_total_expenses: "Gastos Totais (Todas as Viagens)",
    dash_total_outstanding: "Saldo Devedor Total",
    dash_participant_balances: "Saldos dos Participantes",
    table_name: "Nome",
    table_trips: "Viagens",
    table_unpaid_balance: "Saldo Devedor",
    table_actions: "Ações",
    table_date: "Data",
    table_total_cost: "Custo Total",
    table_outbound_info: "Info Ida",
    table_return_info: "Info Volta",
    table_phone: "Telefone (WhatsApp)",
    hist_saved_trips: "Viagens Salvas",
    set_global_defaults: "Padrões Globais",
    set_default_fuel: "Preço Padrão do Combustível (R$ / L)",
    set_save: "Salvar",
    set_manage_carpoolers: "Gerenciar Participantes",
    set_name_placeholder: "Nome",
    set_phone_placeholder: "Celular (ex: 5511999999999)",
    set_add: "Adicionar",
    set_join_code: "Código de Admin",
    set_join_code_placeholder: "Digite o código",
    set_pix_key: "Chave PIX",
    set_pix_placeholder: "Sua chave PIX",
    modal_edit_carpooler: "Editar Participante",
    modal_edit_trip: "Editar Viagem",
    btn_cancel: "Cancelar",
    btn_save_changes: "Salvar Alterações",
    loading_message: "Carregando...",
    js_alert_error: "Ocorreu um erro: {msg}",
    // JS injected
    js_alert_wrong_join_code: "Código de acesso inválido. Você não pode fazer alterações.",
    js_alert_join_code_saved: "Código de acesso salvo.",
    js_error_fetching: "Erro ao buscar dados.",
    js_alert_zero_cost: "Não é possível salvar uma viagem com custo zero.",
    js_alert_invalid_fuel: "O preço do combustível deve ser maior que 0.",
    js_alert_invalid_eff: "A eficiência deve ser maior que 0.",
    js_alert_trip_saved: "Viagem salva com sucesso!",
    js_alert_fuel_saved: "Preço padrão do combustível salvo!",
    js_alert_pix_saved: "Chave PIX salva!",
    js_confirm_remove_user: "Tem certeza que deseja remover este participante?",
    js_confirm_delete_trip: "Tem certeza que deseja excluir esta viagem? Isso ajustará os saldos.",
    js_confirm_mark_paid: "Marcar R$ {amount} como pago?",
    js_empty_users: "Nenhum participante adicionado ainda.",
    js_empty_users_settings: "Vá em Configurações para adicionar participantes.",
    js_empty_trips: "Nenhuma viagem registrada ainda.",
    js_empty_data: "Sem dados disponíveis.",
    js_preview_empty: "Insira as distâncias para ver a divisão.",
    js_driver_you: "Motorista (Você)",
    js_btn_paid: "Pago",
    js_btn_send: "Enviar",
    js_settled: "Quitado",
    js_pax: "Pax",
    js_ida: "Ida",
    js_volta: "Volta",
    js_wa_msg: "Fala {name}, aqui é o resumo das suas caronas na semana de {date}: Total R${amount}. (Ida: {ida} viagens, Volta: {volta} viagens). Valeu!"
  }
};

let currentLang = localStorage.getItem('carpool_lang') || 'en';
let currentTheme = localStorage.getItem('carpool_theme');

if (!currentTheme) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    currentTheme = 'light';
  } else {
    currentTheme = 'dark';
  }
}

function t(key, params = {}) {
  let str = translations[currentLang][key] || key;
  for (const [k, v] of Object.entries(params)) {
    str = str.replace(`{${k}}`, v);
  }
  return str;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.setAttribute('placeholder', translations[currentLang][key]);
    }
  });
  
  const langBtn = document.getElementById('btn-toggle-lang');
  if (langBtn) {
    langBtn.textContent = currentLang === 'en' ? 'EN' : 'PT';
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'pt' : 'en';
  localStorage.setItem('carpool_lang', currentLang);
  applyTranslations();
  
  // Re-render
  renderCarpoolersSettings();
  initLogger();
  updateDashboard();
  updateHistory();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const icon = document.getElementById('icon-theme');
  if (icon) {
    if (currentTheme === 'light') {
      icon.className = 'fa-solid fa-sun text-xl';
    } else {
      icon.className = 'fa-solid fa-moon text-xl';
    }
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('carpool_theme', currentTheme);
  applyTheme();
}

function showLoading() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) overlay.classList.remove('hidden');
}

function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) overlay.classList.add('hidden');
}

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}

window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}



// ==========================================
// STATE MANAGEMENT & SUPABASE
// ==========================================

let state = {
  settings: {
    defaultFuelPrice: 5.50,
    pixKey: ''
  },
  carpoolers: [], 
  trips: []       
};

let supabaseClient = null;
try {
  const supabaseUrl = (window.env && window.env.SUPABASE_URL) || '';
  const supabaseKey = (window.env && window.env.SUPABASE_ANON_KEY) || '';
  if (supabaseUrl && supabaseUrl.startsWith('http') && supabaseKey && window.supabase) {
    supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
  } else {
    console.warn("Supabase credentials missing or invalid. Please update env.js.");
  }
} catch (e) {
  console.error("Failed to initialize Supabase:", e);
}

let currentJoinCode = '';
try {
  currentJoinCode = localStorage.getItem('carpool_join_code') || '';
} catch (e) {
  console.warn("localStorage not available");
}

function checkJoinCode() {
  const expectedCode = (window.env && window.env.JOIN_CODE) || '';
  if (!expectedCode) return true;
  if (currentJoinCode !== expectedCode) {
    alert(t('js_alert_wrong_join_code'));
    return false;
  }
  return true;
}

function saveLocalSettings() {
  localStorage.setItem('carpool_settings', JSON.stringify(state.settings));
}

function loadLocalSettings() {
  const saved = localStorage.getItem('carpool_settings');
  if (saved) {
    try {
      state.settings = JSON.parse(saved);
    } catch (e) {}
  }
}

async function fetchData() {
  if (!supabaseClient) {
    console.error("Supabase client not initialized.");
    return;
  }
  try {
    const { data: carpoolersData, error: cErr } = await supabaseClient.from('carpoolers').select('*');
    if (cErr) throw cErr;
    
    const { data: tripsData, error: tErr } = await supabaseClient.from('trips').select('*, trip_participants(*)');
    if (tErr) throw tErr;

    state.carpoolers = carpoolersData.map(c => ({
      id: c.id,
      name: c.name,
      phone: c.phone,
      totalPaid: parseFloat(c.total_paid) || 0
    }));

    state.trips = tripsData.map(t => {
      const outIds = t.trip_participants.filter(tp => tp.present_ida).map(tp => tp.carpooler_id);
      const retIds = t.trip_participants.filter(tp => tp.present_volta).map(tp => tp.carpooler_id);
      
      const individualCosts = {};
      t.trip_participants.forEach(tp => {
        individualCosts[tp.carpooler_id] = {
          total: parseFloat(tp.cost_total) || 0,
          ida: parseFloat(tp.cost_ida) || 0,
          volta: parseFloat(tp.cost_volta) || 0,
          extra: parseFloat(tp.cost_extra) || 0
        };
      });

      return {
        id: t.id,
        date: t.date,
        totalCost: parseFloat(t.total_cost) || 0,
        outboundInfo: { dist: parseFloat(t.outbound_dist) || 0, eff: parseFloat(t.outbound_eff) || 0, count: t.outbound_count || 0 },
        returnInfo: { dist: parseFloat(t.return_dist) || 0, eff: parseFloat(t.return_eff) || 0, count: t.return_count || 0 },
        individualCosts: individualCosts,
        outIds: outIds,
        retIds: retIds
      };
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    alert(t('js_error_fetching'));
  }
}

// ==========================================
// INITIALIZATION
// ==========================================

function initApp() {
  console.log("App initialization started...");
  try { loadLocalSettings(); console.log("loadLocalSettings done"); } catch (e) { console.error("Error in loadLocalSettings:", e); }
  
  try { applyTheme(); console.log("applyTheme done"); } catch (e) { console.error("Error in applyTheme:", e); }
  try { applyTranslations(); console.log("applyTranslations done"); } catch (e) { console.error("Error in applyTranslations:", e); }

  const langBtn = document.getElementById('btn-toggle-lang');
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);
  
  const themeBtn = document.getElementById('btn-toggle-theme');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const jcInput = document.getElementById('settings-join-code');
  if (jcInput) jcInput.value = currentJoinCode;
  
  const jcBtn = document.getElementById('btn-save-join-code');
  if (jcBtn) {
    jcBtn.onclick = () => {
      currentJoinCode = document.getElementById('settings-join-code').value.trim();
      localStorage.setItem('carpool_join_code', currentJoinCode);
      alert(t('js_alert_join_code_saved'));
    };
  }

  try { initTabs(); console.log("initTabs done"); } catch (e) { console.error("Error in initTabs:", e); }
  try { initSettings(); console.log("initSettings done"); } catch (e) { console.error("Error in initSettings:", e); }
  
  fetchData().then(() => {
    console.log("fetchData done");
    try { initLogger(); console.log("initLogger done"); } catch (e) { console.error("Error in initLogger:", e); }
    try { updateDashboard(); console.log("updateDashboard done"); } catch (e) { console.error("Error in updateDashboard:", e); }
    try { updateHistory(); console.log("updateHistory done"); } catch (e) { console.error("Error in updateHistory:", e); }
    try { renderCarpoolersSettings(); console.log("renderCarpoolersSettings done"); } catch (e) { console.error("Error in renderCarpoolers:", e); }
    console.log("App initialization complete!");
  }).catch(e => {
    console.error("Error during fetchData:", e);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

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
  const pixInput = document.getElementById('settings-pix-key');
  if (pixInput) pixInput.value = state.settings.pixKey || '';
  
  const form = document.getElementById('form-add-carpooler');
  form.onsubmit = async (e) => {
    e.preventDefault();
    if (!checkJoinCode()) return;
    
    const name = document.getElementById('new-carpooler-name').value.trim();
    let phone = document.getElementById('new-carpooler-phone').value.trim();
    phone = phone.replace(/\D/g, '');

    if (name && phone) {
      if (supabaseClient) {
        const { data, error } = await supabaseClient.from('carpoolers').insert([{ name, phone, total_paid: 0 }]).select();
        if (!error && data && data.length > 0) {
          state.carpoolers.push({
            id: data[0].id,
            name,
            phone,
            totalPaid: 0
          });
          document.getElementById('new-carpooler-name').value = '';
          document.getElementById('new-carpooler-phone').value = '';
          renderCarpoolersSettings();
          initLogger(); // Update checkboxes
        } else {
          console.error(error);
        }
      }
    }
  };

  document.getElementById('btn-save-settings').onclick = () => {
    const val = parseFloat(document.getElementById('settings-fuel-price').value);
    if (!isNaN(val) && val >= 0) {
      state.settings.defaultFuelPrice = val;
      saveLocalSettings();
      alert(t('js_alert_fuel_saved'));
    }
  };

  const pixBtn = document.getElementById('btn-save-pix');
  if (pixBtn) {
    pixBtn.onclick = () => {
      state.settings.pixKey = document.getElementById('settings-pix-key').value.trim();
      saveLocalSettings();
      alert(t('js_alert_pix_saved'));
    };
  }

  renderCarpoolersSettings();
}

function renderCarpoolersSettings() {
  const tbody = document.getElementById('settings-carpoolers-body');
  tbody.innerHTML = '';
  
  if (state.carpoolers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="text-center text-gray-500">${t('js_empty_users')}</td></tr>`;
    return;
  }

  state.carpoolers.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${c.name}</td>
      <td>${c.phone}</td>
      <td>
        <div class="flex gap-3">
          <button class="text-primary hover:text-blue-400" onclick="openEditCarpoolerModal('${c.id}')">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="text-danger hover:text-red-400" onclick="deleteCarpooler('${c.id}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.deleteCarpooler = async function(id) {
  if (!checkJoinCode()) return;
  if(confirm(t('js_confirm_remove_user'))) {
    if (supabaseClient) {
      showLoading();
      try {
        const { error } = await supabaseClient.from('carpoolers').delete().eq('id', id);
        if (error) throw error;
        await fetchData();
        renderCarpoolersSettings();
        updateDashboard();
        updateHistory();
        initLogger();
      } catch (err) {
        console.error(err);
        alert(t('js_alert_error', {msg: err.message || err.details || "Unknown error"}));
      } finally {
        hideLoading();
      }
    }
  }
}

window.openEditCarpoolerModal = function(id) {
  if (!checkJoinCode()) return;
  const user = state.carpoolers.find(c => c.id === id);
  if (!user) return;
  
  document.getElementById('edit-carpooler-id').value = user.id;
  document.getElementById('edit-carpooler-name').value = user.name;
  document.getElementById('edit-carpooler-phone').value = user.phone;
  
  openModal('modal-edit-carpooler');
}

if (document.getElementById('form-edit-carpooler')) {
  document.getElementById('form-edit-carpooler').onsubmit = async (e) => {
    e.preventDefault();
    if (!checkJoinCode()) return;
    
    const id = document.getElementById('edit-carpooler-id').value;
    const name = document.getElementById('edit-carpooler-name').value.trim();
    let phone = document.getElementById('edit-carpooler-phone').value.trim();
    phone = phone.replace(/\D/g, '');

    if (id && name && phone && supabaseClient) {
      showLoading();
      try {
        const { error } = await supabaseClient.from('carpoolers').update({ name, phone }).eq('id', id);
        if (error) throw error;
        
        await fetchData();
        renderCarpoolersSettings();
        updateDashboard();
        updateHistory();
        initLogger();
        closeModal('modal-edit-carpooler');
      } catch (err) {
        console.error(err);
        alert(t('js_alert_error', {msg: err.message || err.details || "Unknown error"}));
      } finally {
        hideLoading();
      }
    }
  };
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
    container.innerHTML = `<p class="text-sm text-gray-500">${t('js_empty_users_settings')}</p>`;
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
  const outEff = parseFloat(document.getElementById('log-outbound-eff').value) || 0;
  
  const retDist = parseFloat(document.getElementById('log-return-dist').value) || 0;
  const retEff = parseFloat(document.getElementById('log-return-eff').value) || 0;

  const outIds = Array.from(document.querySelectorAll('#outbound-participants input:checked')).map(el => el.value);
  const retIds = Array.from(document.querySelectorAll('#return-participants input:checked')).map(el => el.value);

  // Math
  const outCost = (outDist > 0 && outEff > 0) ? (outDist / outEff) * fuelPrice : 0;
  const retCost = (retDist > 0 && retEff > 0) ? (retDist / retEff) * fuelPrice : 0;
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
        breakdown.push(t('js_ida'));
      }
      if (retIds.includes(c.id)) {
        cost += retPerPerson;
        breakdown.push(t('js_volta'));
      }
      if (uniqueIds.has(c.id)) {
        cost += extraPerPerson;
      }

      if (cost > 0) {
        previewSplitsData[c.id] = {
          total: cost,
          ida: outIds.includes(c.id) ? outPerPerson : 0,
          volta: retIds.includes(c.id) ? retPerPerson : 0,
          extra: uniqueIds.has(c.id) ? extraPerPerson : 0
        };
        splitsHtml += `<div class="flex justify-between text-sm mb-1 border-b border-surface pb-1">
          <span>${c.name} <span class="text-xs text-gray-500">(${breakdown.join(', ')})</span></span>
          <span class="font-mono">R$ ${cost.toFixed(2)}</span>
        </div>`;
      }
    });

    // Driver slice
    let driverCost = totalCost;
    Object.values(previewSplitsData).forEach(dataObj => driverCost -= dataObj.total);
    splitsHtml += `<div class="flex justify-between text-sm mt-2 text-gray-400">
      <span>${t('js_driver_you')}</span>
      <span class="font-mono">R$ ${driverCost.toFixed(2)}</span>
    </div>`;

  } else {
    splitsHtml = `<p class="text-sm text-gray-500 text-center mt-4">${t('js_preview_empty')}</p>`;
  }

  document.getElementById('preview-total-cost').innerText = totalCost.toFixed(2);
  document.getElementById('preview-splits').innerHTML = splitsHtml;

  return { totalCost, outCost, retCost, extra, outIds, retIds, outDist, outEff, retDist, retEff, previewSplitsData, fuelPrice };
}

async function saveTrip() {
  if (!checkJoinCode()) return;
  const data = calculatePreview();
  
  if (data.fuelPrice <= 0) {
    alert(t('js_alert_invalid_fuel'));
    return;
  }
  
  if ((data.outDist > 0 && data.outEff <= 0) || (data.retDist > 0 && data.retEff <= 0)) {
    alert(t('js_alert_invalid_eff'));
    return;
  }

  if (data.totalCost <= 0) {
    alert(t('js_alert_zero_cost'));
    return;
  }

  if (supabaseClient) {
    const tripToInsert = {
      date: new Date().toISOString(),
      total_cost: data.totalCost,
      outbound_dist: data.outDist,
      outbound_eff: data.outEff,
      outbound_count: data.outIds.length,
      return_dist: data.retDist,
      return_eff: data.retEff,
      return_count: data.retIds.length
    };

    const { data: tripData, error: tripErr } = await supabaseClient.from('trips').insert([tripToInsert]).select();
    if (tripErr) {
      console.error(tripErr);
      return;
    }

    const tripId = tripData[0].id;
    const participants = [];
    
    for (const [userId, costs] of Object.entries(data.previewSplitsData)) {
      participants.push({
        trip_id: tripId,
        carpooler_id: userId,
        cost_total: costs.total,
        cost_ida: costs.ida,
        cost_volta: costs.volta,
        cost_extra: costs.extra,
        present_ida: data.outIds.includes(userId),
        present_volta: data.retIds.includes(userId)
      });
    }

    if (participants.length > 0) {
      const { error: partErr } = await supabaseClient.from('trip_participants').insert(participants);
      if (partErr) console.error(partErr);
    }

    // Refresh data instead of manual state push to ensure consistency
    await fetchData();

    // Reset Form
    document.getElementById('log-outbound-dist').value = '';
    document.getElementById('log-outbound-eff').value = '';
    document.getElementById('log-return-dist').value = '';
    document.getElementById('log-return-eff').value = '';
    document.getElementById('log-extra-expenses').value = '0.00';
    calculatePreview();
    
    alert(t('js_alert_trip_saved'));
  }
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
    for (const [userId, costData] of Object.entries(t.individualCosts)) {
      if (carpoolerDebts[userId]) {
        const costValue = typeof costData === 'number' ? costData : costData.total;
        carpoolerDebts[userId].totalDebt += costValue;
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
    
    let msg = t('js_wa_msg', {
      name: c.name,
      date: dateStr,
      amount: balance.toFixed(2),
      ida: carpoolerDebts[c.id].tripsIda,
      volta: carpoolerDebts[c.id].tripsVolta
    });
    
    if (state.settings.pixKey) {
      msg += `\nPIX: ${state.settings.pixKey}`;
    }
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
              <i class="fa-solid fa-check"></i> ${t('js_btn_paid')}
            </button>
            <a href="${waLink}" target="_blank" class="btn-primary bg-green-600 hover:bg-green-700 text-xs py-1 px-2">
              <i class="fa-brands fa-whatsapp"></i> ${t('js_btn_send')}
            </a>
          ` : `
            <span class="text-xs text-gray-500 italic">${t('js_settled')}</span>
          `}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (state.carpoolers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center text-gray-500">${t('js_empty_data')}</td></tr>`;
  }

  document.getElementById('dash-total-outstanding').innerText = totalOutstanding.toFixed(2);
}

window.markPaid = async function(userId, amount) {
  if (!checkJoinCode()) return;
  if(confirm(t('js_confirm_mark_paid', {amount: amount.toFixed(2)}))) {
    const user = state.carpoolers.find(c => c.id === userId);
    if (user && supabaseClient) {
      const newTotal = (user.totalPaid || 0) + amount;
      const { error } = await supabaseClient.from('carpoolers').update({ total_paid: newTotal }).eq('id', userId);
      if (!error) {
        user.totalPaid = newTotal;
        updateDashboard();
      } else {
        console.error(error);
      }
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
    tbody.innerHTML = `<tr><td colspan="5" class="text-center text-gray-500">${t('js_empty_trips')}</td></tr>`;
    return;
  }

  // Sort newest first
  const sortedTrips = [...state.trips].sort((a,b) => new Date(b.date) - new Date(a.date));

  sortedTrips.forEach(tobj => {
    const dateObj = new Date(tobj.date);
    const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="whitespace-nowrap">${dateStr}</td>
      <td class="font-mono text-success font-bold">R$ ${tobj.totalCost.toFixed(2)}</td>
      <td class="text-xs text-gray-400">${tobj.outboundInfo.dist}km (${tobj.outboundInfo.eff}km/L) <br> <i class="fa-solid fa-users"></i> ${tobj.outboundInfo.count} ${t('js_pax')}</td>
      <td class="text-xs text-gray-400">${tobj.returnInfo.dist}km (${tobj.returnInfo.eff}km/L) <br> <i class="fa-solid fa-users"></i> ${tobj.returnInfo.count} ${t('js_pax')}</td>
      <td>
        <div class="flex gap-3">
          <button class="text-primary hover:text-blue-400" onclick="openEditTripModal('${tobj.id}')">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="text-danger hover:text-red-400" onclick="deleteTrip('${tobj.id}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.deleteTrip = async function(tripId) {
  if (!checkJoinCode()) return;
  if (confirm(t('js_confirm_delete_trip'))) {
    if (supabaseClient) {
      showLoading();
      try {
        const { error } = await supabaseClient.from('trips').delete().eq('id', tripId);
        if (error) throw error;
        await fetchData();
        updateHistory();
        updateDashboard();
      } catch (err) {
        console.error(err);
        alert(t('js_alert_error', {msg: err.message || err.details || "Unknown error"}));
      } finally {
        hideLoading();
      }
    }
  }
}

window.openEditTripModal = function(id) {
  if (!checkJoinCode()) return;
  const trip = state.trips.find(t => t.id === id);
  if (!trip) return;
  
  const d = new Date(trip.date);
  const offset = d.getTimezoneOffset() * 60000;
  const localISOTime = (new Date(d - offset)).toISOString().slice(0, 16);

  document.getElementById('edit-trip-id').value = trip.id;
  document.getElementById('edit-trip-date').value = localISOTime;
  
  let extra = 0;
  const firstUserId = Object.keys(trip.individualCosts)[0];
  if (firstUserId && trip.individualCosts[firstUserId].extra) {
    const participantCount = Object.keys(trip.individualCosts).length;
    extra = trip.individualCosts[firstUserId].extra * (participantCount + 1);
  }

  document.getElementById('edit-trip-extra').value = extra.toFixed(2);
  document.getElementById('edit-outbound-dist').value = trip.outboundInfo.dist;
  document.getElementById('edit-outbound-eff').value = trip.outboundInfo.eff;
  document.getElementById('edit-return-dist').value = trip.returnInfo.dist;
  document.getElementById('edit-return-eff').value = trip.returnInfo.eff;

  let oldLiters = 0;
  if (trip.outboundInfo.eff > 0) oldLiters += (trip.outboundInfo.dist / trip.outboundInfo.eff);
  if (trip.returnInfo.eff > 0) oldLiters += (trip.returnInfo.dist / trip.returnInfo.eff);
  
  let historicalFuelPrice = state.settings.defaultFuelPrice;
  if (oldLiters > 0) {
    historicalFuelPrice = (trip.totalCost - extra) / oldLiters;
  }
  
  document.getElementById('form-edit-trip').dataset.fuelPrice = historicalFuelPrice.toString();

  const outContainer = document.getElementById('edit-outbound-participants');
  outContainer.innerHTML = '';
  state.carpoolers.forEach(c => {
    const isChecked = trip.outIds.includes(c.id);
    const label = document.createElement('label');
    label.className = 'checkbox-container';
    label.innerHTML = `
      ${c.name}
      <input type="checkbox" value="${c.id}" ${isChecked ? 'checked' : ''}>
      <span class="checkmark"></span>
    `;
    outContainer.appendChild(label);
  });

  const retContainer = document.getElementById('edit-return-participants');
  retContainer.innerHTML = '';
  state.carpoolers.forEach(c => {
    const isChecked = trip.retIds.includes(c.id);
    const label = document.createElement('label');
    label.className = 'checkbox-container';
    label.innerHTML = `
      ${c.name}
      <input type="checkbox" value="${c.id}" ${isChecked ? 'checked' : ''}>
      <span class="checkmark"></span>
    `;
    retContainer.appendChild(label);
  });

  openModal('modal-edit-trip');
}

if (document.getElementById('form-edit-trip')) {
  document.getElementById('form-edit-trip').onsubmit = async (e) => {
    e.preventDefault();
    if (!checkJoinCode()) return;
    
    const id = document.getElementById('edit-trip-id').value;
    const dateStr = document.getElementById('edit-trip-date').value;
    const extra = parseFloat(document.getElementById('edit-trip-extra').value) || 0;
    
    const outDist = parseFloat(document.getElementById('edit-outbound-dist').value) || 0;
    const outEff = parseFloat(document.getElementById('edit-outbound-eff').value) || 0;
    const retDist = parseFloat(document.getElementById('edit-return-dist').value) || 0;
    const retEff = parseFloat(document.getElementById('edit-return-eff').value) || 0;

    const fuelPrice = parseFloat(document.getElementById('form-edit-trip').dataset.fuelPrice) || state.settings.defaultFuelPrice;

    if ((outDist > 0 && outEff <= 0) || (retDist > 0 && retEff <= 0)) {
      alert(t('js_alert_invalid_eff'));
      return;
    }

    const outIds = Array.from(document.querySelectorAll('#edit-outbound-participants input:checked')).map(el => el.value);
    const retIds = Array.from(document.querySelectorAll('#edit-return-participants input:checked')).map(el => el.value);

    const outCost = (outDist > 0 && outEff > 0) ? (outDist / outEff) * fuelPrice : 0;
    const retCost = (retDist > 0 && retEff > 0) ? (retDist / retEff) * fuelPrice : 0;
    const totalCost = outCost + retCost + extra;

    if (totalCost <= 0) {
      alert(t('js_alert_zero_cost'));
      return;
    }

    const outPerPerson = outCost / (outIds.length + 1);
    const retPerPerson = retCost / (retIds.length + 1);
    const uniqueIds = new Set([...outIds, ...retIds]);
    const extraPerPerson = extra / (uniqueIds.size + 1);

    const participants = [];
    uniqueIds.forEach(userId => {
      const p_ida = outIds.includes(userId);
      const p_volta = retIds.includes(userId);
      
      const p_cost_ida = p_ida ? outPerPerson : 0;
      const p_cost_volta = p_volta ? retPerPerson : 0;
      const p_cost_extra = extraPerPerson;
      const p_cost_total = p_cost_ida + p_cost_volta + p_cost_extra;

      participants.push({
        trip_id: id,
        carpooler_id: userId,
        cost_total: p_cost_total,
        cost_ida: p_cost_ida,
        cost_volta: p_cost_volta,
        cost_extra: p_cost_extra,
        present_ida: p_ida,
        present_volta: p_volta
      });
    });

    if (supabaseClient) {
      showLoading();
      try {
        const tripUpdate = {
          date: new Date(dateStr).toISOString(),
          total_cost: totalCost,
          outbound_dist: outDist,
          outbound_eff: outEff,
          outbound_count: outIds.length,
          return_dist: retDist,
          return_eff: retEff,
          return_count: retIds.length
        };

        const { error: tripErr } = await supabaseClient.from('trips').update(tripUpdate).eq('id', id);
        if (tripErr) throw tripErr;

        const { error: delErr } = await supabaseClient.from('trip_participants').delete().eq('trip_id', id);
        if (delErr) throw delErr;

        if (participants.length > 0) {
          const { error: partErr } = await supabaseClient.from('trip_participants').insert(participants);
          if (partErr) throw partErr;
        }

        await fetchData();
        updateDashboard();
        updateHistory();
        closeModal('modal-edit-trip');
      } catch (err) {
        console.error(err);
        alert(t('js_alert_error', {msg: err.message || err.details || "Unknown error"}));
      } finally {
        hideLoading();
      }
    }
  };
}
