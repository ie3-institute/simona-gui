import ControlSection from '../components/ControlSection';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ParameterSection from '../components/ParameterSection';

export default function Home() {
  const generalSettingsForms = (
    <>
      <InputForm
        label="Simulation name"
        name="general-settings"
        type="text"
        placeholder="MySimonaSim"
      />
    </>
  );

  return (
    <>
      <Header />
      <ControlSection />
      <ParameterSection
        header="General Settings"
        content={generalSettingsForms}
      />
    </>
  );
}
