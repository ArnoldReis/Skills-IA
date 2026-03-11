/**
 * Listener de interrupção Spot.
 */
export function listenForTermination() {
  // Why: Reagir rápido ao aviso de término permite salvar o estado atual ou drenar o tráfego sem afetar o usuário final.
  setInterval(async () => {
    const isTerminating = await checkMetadataService();
    if (isTerminating) await initiateGracefulHalt();
  }, 5000);
}
const checkMetadataService = async () => false;
const initiateGracefulHalt = async () => {};
