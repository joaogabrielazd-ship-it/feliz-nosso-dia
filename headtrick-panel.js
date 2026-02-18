// ================================
// Sensi Jhonzinho - Auxilio
// Criador: @jhonzl30
// ================================

// CONFIGURAÇÕES
const VERSION = "v2";
const PASSWORD = "jhonzl30";
const CHANNEL_URL = "https://www.tiktok.com/@jhonzl30";

// INÍCIO
try {
  const input = await promptPassword();
  if (input !== PASSWORD) return accessDenied();

  const follow = await requireSubscription();
  if (!follow) return;

  // OPÇÃO ÚNICA
  const options = ["ATIVAR HEADTRICK"];
  const selected = await showMenu("HEADTRICK PANEL", options);
  if (selected === -1) return;

  await activateHeadtrick();

} catch (e) {
  let alert = new Alert();
  alert.title = "HEADTRICK PANEL";
  alert.message = "Ocorreu um erro inesperado.";
  alert.addAction("OK");
  await alert.present();
}

// ================================
// FUNÇÕES
// ================================

async function promptPassword() {
  let alert = new Alert();
  alert.title = `HEADTRICK PANEL — ${VERSION}`;
  alert.message =
`━━━━━━━━━━━━━━━━━━
Criador: @jhonzl30
━━━━━━━━━━━━━━━━━━

Digite a senha para continuar`;
  alert.addSecureTextField("Senha");
  alert.addAction("Entrar");

  await alert.present();
  return String(alert.textFieldValue(0)).trim();
}

async function requireSubscription() {
  let alert = new Alert();
  alert.title = "Seguir Necessário";
  alert.message =
`Para liberar o HEADTRICK PANEL:

1️⃣ Abra o ttk jhonzl30
2️⃣ Siga-la
3️⃣ Volte e confirme`;
  alert.addAction("Ir para o TikTok");
  alert.addCancelAction("Cancelar");

  const result = await alert.present();
  if (result !== 0) return false;

  Safari.open(CHANNEL_URL);

  let confirm = new Alert();
  confirm.title = "Confirmação";
  confirm.message = "Depois de seguir, toque em Confirmar.";
  confirm.addAction("Confirmar");
  confirm.addCancelAction("Cancelar");

  const confirmResult = await confirm.present();
  return confirmResult === 0;
}

async function showMenu(title, options) {
  let alert = new Alert();
  alert.title = title;
  for (let opt of options) alert.addAction(opt);
  alert.addCancelAction("Fechar");

  return await alert.present();
}

async function activateHeadtrick() {
  let alert = new Alert();
  alert.title = `HEADTRICK PANEL — ${VERSION}`;
  alert.message =
`━━━━━━━━━━━━━━━━━━
Modo Ativo: Sensi Jhonzinho - Auxilio
━━━━━━━━━━━━━━━━━━

Aguarde...
Inicializando módulo gratuito.`;
  alert.addAction("OK");
  await alert.present();

  const fileURL = await DocumentPicker.open();
  if (fileURL) {
    let fileAlert = new Alert();
    fileAlert.title = "Arquivo Selecionado";
    fileAlert.message = `Caminho detectado:\n${fileURL}`;
    fileAlert.addAction("OK");
    await fileAlert.present();
  }

  const games = ["Free Fire", "Free Fire Max"];
  const selectedGame = await showMenu("Selecionar Jogo", games);

  if (selectedGame === 0) Safari.open("freefire://");
  if (selectedGame === 1) Safari.open("freefiremax://");
}

async function accessDenied() {
  let alert = new Alert();
  alert.title = "HEADTRICK PANEL";
  alert.message = "Senha incorreta! Acesso negado.";
  alert.addAction("OK");
  await alert.present();
}
