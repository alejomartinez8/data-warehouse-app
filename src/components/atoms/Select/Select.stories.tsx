import { Select } from './Select.component';

export default {
  title: 'Atoms/Select',
  component: Select,
};

const Template = () => (
  <Select>
    <option>Option 1</option>
    <option>Option 2</option>
  </Select>
);

export const Default = Template.bind({});
