/**
 * Gera um componente de Guard High-Order para proteção de rotas.
 * @returns Template string.
 */
export function generateAuthGuardTemplate(): string {
    // Why: Proteger rotas no lado do cliente é a primeira barreira de UX antes da validação real no backend.
    return `
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) return <p>Carregando...</p>;
  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  return <>{children}</>;
}
    `.trim();
}
