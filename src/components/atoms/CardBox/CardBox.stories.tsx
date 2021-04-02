import { CardBox } from './CardBox.component';

export default {
  title: 'Atoms/CardBox',
  component: CardBox,
};

const Template = () => (
  <CardBox>
    <CardBox.Title>
      <h2>Title</h2>
    </CardBox.Title>
    <CardBox.Content>
      <p>
        Cillum ad exercitation in excepteur laboris officia nulla do eu non aliquip fugiat enim
        cillum. Esse dolor ipsum officia fugiat quis labore qui ad reprehenderit officia. Pariatur
        sit non et incididunt aliqua esse officia laboris nulla dolor duis occaecat fugiat.
      </p>
      <p>
        Cupidatat do duis qui amet ut labore dolor anim in consectetur incididunt incididunt. Tempor
        pariatur eu esse enim quis tempor ut reprehenderit ut incididunt enim occaecat proident
        quis. Ut velit nulla ex Lorem velit consectetur eiusmod elit. Esse mollit id Lorem irure
        eiusmod eiusmod est quis nostrud. Laborum sit occaecat magna ullamco quis voluptate labore
        cupidatat ut proident anim dolore excepteur occaecat.
      </p>
    </CardBox.Content>
  </CardBox>
);

export const Default = Template.bind({});
