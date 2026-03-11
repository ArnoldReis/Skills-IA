/**
 * Comando para checar política atual.
 */
export function getRedisEvictionCheck() {
  return 'CONFIG GET maxmemory-policy';
}
