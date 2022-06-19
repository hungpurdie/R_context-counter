interface Props {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

export default function AppContextCompose({ components = [], children }: Props) {
  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
}
