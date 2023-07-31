import { ButtonBadge } from './ButtonBadge';
import { Default } from './Default';
import { Positioned } from './Positioned';
import { Rounded } from './Rounded';

const BadgePage = () => {
  return (
    <>
      <Default />
      <Rounded />
      <Positioned />
      <ButtonBadge />
    </>
  );
};

export default BadgePage;
