import Switch from 'react-switch';
import { Wrapper, Controller } from './ControlSection.styles';
import { useState } from 'react';

const ControlSection = () => {
  const [isSwitchOnA, setIsSwitchOnA] = useState(false);
  const [isSwitchOnB, setIsSwitchOnB] = useState(false);
  const onToggleSwitchA = () => setIsSwitchOnA(!isSwitchOnA);
  const onToggleSwitchB = () => setIsSwitchOnB(!isSwitchOnB);

  return (
    <>
      <Wrapper>
        <Controller>
          Create configuration
          <Switch
            checked={isSwitchOnA}
            onChange={onToggleSwitchA}
            onColor="#7AB523"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={70}
            className="react-switch"
            id="material-switch"
          />
        </Controller>
      </Wrapper>
      <Wrapper>
        <Controller>
          Hide advanced features
          <Switch
            checked={isSwitchOnB}
            onChange={onToggleSwitchB}
            onColor="#7AB523"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={70}
            className="react-switch"
            id="material-switch"
          />
        </Controller>
      </Wrapper>
    </>
  );
};

export default ControlSection;
