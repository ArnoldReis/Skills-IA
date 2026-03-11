/**
 * Interface de pagamento genérica.
 */
export interface PaymentProvider {
  // Why: Adaptadores protegem o núcleo do sistema contra mudanças repentinas em APIs de terceiros.
  pay(amount: number): Promise<boolean>;
}
