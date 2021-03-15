import { storiesOf } from '@storybook/vue'
import IconButton from './Index.vue'

storiesOf('components/atoms/IconButton', module)
  .addParameters({
    component: IconButton,
  })
  .add('default', () => ({
    component: IconButton,
    template: `
        <IconButton />
    `,
  }))
