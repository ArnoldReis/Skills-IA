/**
 * Envia notificação se permitido.
 */
export async function sendNotification(title: string, body: string): Promise<void> {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    new Notification(title, { body });
  }
}
