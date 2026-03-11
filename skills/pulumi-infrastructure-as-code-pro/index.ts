/**
 * Recurso Pulumi em TypeScript.
 */
export function createBucket(name: string) {
  // Why: Usar uma linguagem real permite criar abstrações muito mais poderosas do que DSLs declarativas limitadas.
  return new aws.s3.Bucket(name, { acl: 'private', forceDestroy: true });
}
const aws: any = { s3: { Bucket: class {} } };
