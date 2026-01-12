import { Slider } from '@base-ui/react';

const NeuSlider = (props) => {
  return (
    <Slider.Root>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
        </Slider.Track>
        <Slider.Thumb />
      </Slider.Control>
    </Slider.Root>
  );
};

export default NeuSlider;
