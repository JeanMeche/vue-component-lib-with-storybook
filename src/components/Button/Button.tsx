/** @jsx h */
import { h, defineComponent } from 'vue';
import './button.css';

export const MyButton = defineComponent({
  name: 'my-button',
  props: {
    label: String,
    primary: Boolean,
    size: String as () => "small" | 'medium' | 'large',
    backgroundColor: String,
  },
  emits: ['click2'],

  setup(props, context) {
    const classes = {
      'storybook-button': true,
      'storybook-button--primary': props.primary,
      'storybook-button--secondary': !props.primary,
      [`storybook-button--${props.size || 'medium'}`]: true,
    };
    const style = {
      backgroundColor: props.backgroundColor,
    };
    const onClick = () => {
      context.emit('click2');
    }

    return () => (
      <button type="button" class={classes} onClick={onClick} style={style}>{props.label}</button>
    );
  }
});