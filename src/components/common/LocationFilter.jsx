/**
 * LocationFilter Component
 * Dropdown filter for selecting location
 */
import { Box, HStack, Text, Button } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { useLanguage } from '../../i18n';

// Map location IDs to translation keys (handling kebab-case to camelCase)
const locationKeyMap = {
  'all': 'allLocations',
  'kl': 'kl',
  'pj': 'pj',
  'subang': 'subang',
  'shah-alam': 'shahAlam',
  'cheras': 'cheras',
  'bangsar': 'bangsar',
  'mont-kiara': 'montKiara',
  'damansara': 'damansara',
  'setapak': 'setapak',
  'putrajaya': 'putrajaya',
  'ampang': 'ampang',
  'kepong': 'kepong',
};

const LocationFilter = ({ locations, activeLocation, onSelect }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const selectedLocation = locations.find(loc => loc.id === activeLocation) || locations[0];

  const handleSelect = (locId) => {
    onSelect(locId);
    setIsOpen(false);
  };

  return (
    <Box position="relative" px={4} mb={2}>
      {/* Dropdown Trigger */}
      <Button
        w="full"
        h="44px"
        bg="white"
        borderRadius="lg"
        boxShadow="sm"
        justifyContent="space-between"
        px={4}
        onClick={() => setIsOpen(!isOpen)}
        _hover={{ bg: 'gray.50' }}
        _active={{ bg: 'gray.100' }}
      >
        <HStack gap={2}>
          <Box as={FaMapMarkerAlt} color="blue.500" boxSize={4} />
          <Text fontSize="sm" fontWeight="medium" color="gray.700">
            {t(`location.${locationKeyMap[selectedLocation.id]}`)}
          </Text>
        </HStack>
        <Box
          as={FaChevronDown}
          color="gray.400"
          boxSize={3}
          transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
          transition="transform 0.2s"
        />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={90}
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <Box
            position="absolute"
            top="100%"
            left={4}
            right={4}
            mt={1}
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            zIndex={100}
            maxH="300px"
            overflowY="auto"
            py={2}
          >
            {locations.map((loc) => (
              <HStack
                key={loc.id}
                px={4}
                py={3}
                cursor="pointer"
                bg={activeLocation === loc.id ? 'blue.50' : 'transparent'}
                _hover={{ bg: activeLocation === loc.id ? 'blue.50' : 'gray.50' }}
                onClick={() => handleSelect(loc.id)}
                gap={3}
              >
                <Box
                  as={FaMapMarkerAlt}
                  color={activeLocation === loc.id ? 'blue.500' : 'gray.400'}
                  boxSize={4}
                />
                <Box flex={1}>
                  <Text
                    fontSize="sm"
                    fontWeight={activeLocation === loc.id ? 'semibold' : 'normal'}
                    color={activeLocation === loc.id ? 'blue.600' : 'gray.700'}
                  >
                    {t(`location.${locationKeyMap[loc.id]}`)}
                  </Text>
                  {loc.region && (
                    <Text fontSize="xs" color="gray.400">
                      {t(`location.${loc.region}`)}
                    </Text>
                  )}
                </Box>
                {activeLocation === loc.id && (
                  <Box w={2} h={2} borderRadius="full" bg="blue.500" />
                )}
              </HStack>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default LocationFilter;
