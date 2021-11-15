import {Box, Center, Container, Heading, VStack} from '@chakra-ui/layout';
import type {NextPage} from 'next';
import ControlSwitch from '../Components/ControlSwitch';
import CoordinateSourceParams from '../Components/CoordinateSourceParams';
import CsvParams from '../Components/CsvParams';
import CsvSinkParams from '../Components/CsvSinkParams';
import OutputCheckboxes from '../Components/OutputCheckboxes';
import RegularInput from '../Components/RegularInput';
import SelectInput from '../Components/SelectInput';
import {IconButton} from '@chakra-ui/button';
import Header from '../Components/Header';

const Home: NextPage = () => {
  return (
    <Container maxW='840px'>
      <Header />
      <VStack>
        <Center mb='50px'>
          <Heading>Simulation Configuration</Heading>
        </Center>
        <Box>
          <Center width='340px' mb='75px'>
            <VStack spacing='20px' width='100%'>
              <ControlSwitch label='Create Configuration' id='create-config' />
              <ControlSwitch
                label='Hide advanced features'
                id='hide-features'
              />
            </VStack>
          </Center>
        </Box>
        <Box width='100%'>
          <Center mb='30px'>
            <Heading size='md'> General Settings</Heading>
          </Center>

          <VStack width='100%' spacing='30px' mb='75px'>
            <RegularInput label='Simulation name' placeholder='MySimulation' />
            <RegularInput
              label='Start date time'
              placeholder='2011-05-01 00:00:00'
            />
            <RegularInput
              label='End date time'
              placeholder='2011-05-01 01:00:00'
            />
            <SelectInput
              label='Stop on failed power flow'
              options={['yes', 'no']}
            />
            <SelectInput
              label='Scheduler ready check window'
              options={['none', '1', '2', '3', '4', '5']}
            />
          </VStack>
        </Box>

        <Box width='100%'>
          <Center mb='30px'>
            <Heading size='md'> Input Parameters</Heading>
          </Center>

          <VStack width='100%' spacing='30px' mb='75px'>
            <SelectInput
              label='Choose primary data source'
              options={['CSV', 'influxDb', 'SQL', 'Couchbase']}
            />
            <CsvParams />
          </VStack>
        </Box>

        <Box width='100%'>
          <Center mb='30px'>
            <Heading size='md'>Weather Data</Heading>
          </Center>

          <VStack width='100%' spacing='30px' mb='75px'>
            <SelectInput
              label='Choose weather data scheme'
              options={['icon', 'cosmo']}
            />
            # TODO: Check if placeholder is sensible
            <RegularInput
              label={'Time stamp pattern'}
              placeholder={"yyyy-MM-dd'T'HH:mm:ss[.S[S][S]]'Z'"}
            />
            # TODO: Get sensible placeholder
            <RegularInput label={'Resolution'} placeholder={'900'} />
            <SelectInput
              label='Choose weather data source'
              options={['CSV', 'influxDb', 'SQL', 'Couchbase']}
            />
            <CsvParams />
            <CoordinateSourceParams />
            <SelectInput label={'Use sample params'} options={['yes', 'no']} />
          </VStack>
        </Box>

        <Box width='100%'>
          <Center mb='30px'>
            <Heading size='md'> Output Parameters</Heading>
          </Center>
          <VStack width='100%' spacing='30px' mb='75px'>
            <RegularInput label={'Output directory'} placeholder={''} />
            <SelectInput
              label='Choose output format'
              options={['CSV', 'influxDb']}
            />
            <CsvSinkParams />
            <OutputCheckboxes />
          </VStack>
        </Box>

        <Box width='100%'>
          <Center mb='30px'>
            <Heading size='md'>Powerflow Configuration</Heading>
          </Center>
          <VStack width='100%' spacing='30px' mb='75px'>
            <RegularInput
              label={'Maximum sweep power deviation'}
              placeholder={'1e-5'}
            />
            <RegularInput label={'Sweep timeout'} placeholder={'30 seconds'} />
            <RegularInput
              label={'Newton raphson epsilon'}
              placeholder={'1e-12'}
            />
            <RegularInput
              label={'Newton raphson iteration limit'}
              placeholder={'50'}
            />
            <RegularInput
              label={'Powerflow resolution'}
              placeholder={'3600 seconds'}
            />
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
