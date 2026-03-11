/**
 * Handler que escuta o próprio evento.
 */
export function handleSelfEvent(event: any) {
  if (event.source === 'ME') {
     console.log('Updating internal state from my own event stream');
  }
}
