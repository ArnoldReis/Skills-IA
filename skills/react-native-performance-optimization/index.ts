/**
 * Otimização de render em mobile.
 */
export const optimizedComponent = React.memo((props: any) => {
  // Why: No mobile, o desperdício de CPU se traduz diretamente em lag perceptível e drenagem de bateria para o usuário.
  return <View>{props.content}</View>;
});
const React: any = { memo: (c: any) => c };
const View: any = () => null;
