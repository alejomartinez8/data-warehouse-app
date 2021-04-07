import { Icon, IIcon } from './Icon.component';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

const Template = ({ icon, color }: IIcon) => <Icon icon={icon} color={color} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'fa fa-search',
};
