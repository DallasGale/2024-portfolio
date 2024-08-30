import { ParallaxProvider } from "react-scroll-parallax";

interface Props {
  children: React.ReactNode;
}
const Provider = ({ children }: Props) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default Provider;
