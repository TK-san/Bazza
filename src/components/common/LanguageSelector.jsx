/**
 * LanguageSelector Component
 * Modal/Drawer for selecting app language
 */
import { Box, VStack, HStack, Text, Button } from '@chakra-ui/react';
import { FaArrowLeft, FaCheck, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../../i18n';

const LanguageSelector = ({ onBack }) => {
  const { language, setLanguage, supportedLanguages, languageNames, t } = useLanguage();

  const languageDetails = {
    en: { name: 'English', native: 'English', flag: '🇬🇧' },
    ms: { name: 'Malay', native: 'Bahasa Melayu', flag: '🇲🇾' },
    zh: { name: 'Mandarin', native: '中文', flag: '🇨🇳' },
  };

  const handleSelect = (lang) => {
    setLanguage(lang);
  };

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box
        bg="white"
        px={4}
        py={3}
        borderBottom="1px solid"
        borderColor="gray.100"
        position="sticky"
        top={0}
        zIndex={50}
      >
        <HStack gap={3}>
          <Button
            variant="ghost"
            p={0}
            minW="auto"
            h="auto"
            color="gray.600"
            onClick={onBack}
          >
            <Box as={FaArrowLeft} boxSize={5} />
          </Button>
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              {t('profile.language')}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {t('profile.languageDesc')}
            </Text>
          </Box>
        </HStack>
      </Box>

      {/* Language Options */}
      <Box p={4}>
        <VStack gap={2}>
          {supportedLanguages.map((lang) => {
            const details = languageDetails[lang];
            const isSelected = language === lang;

            return (
              <Box
                key={lang}
                w="full"
                bg="white"
                borderRadius="xl"
                boxShadow="sm"
                p={4}
                cursor="pointer"
                border="2px solid"
                borderColor={isSelected ? 'blue.500' : 'transparent'}
                transition="all 0.2s"
                _hover={{ borderColor: isSelected ? 'blue.500' : 'gray.200' }}
                onClick={() => handleSelect(lang)}
              >
                <HStack justify="space-between">
                  <HStack gap={3}>
                    <Text fontSize="2xl">{details.flag}</Text>
                    <VStack align="start" gap={0}>
                      <Text fontWeight="semibold" color="gray.800">
                        {details.native}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        {details.name}
                      </Text>
                    </VStack>
                  </HStack>
                  {isSelected && (
                    <Box
                      w={6}
                      h={6}
                      borderRadius="full"
                      bg="blue.500"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box as={FaCheck} color="white" boxSize={3} />
                    </Box>
                  )}
                </HStack>
              </Box>
            );
          })}
        </VStack>

        {/* Info Text */}
        <Box mt={6} textAlign="center">
          <HStack justify="center" gap={2} color="gray.400">
            <Box as={FaGlobe} boxSize={4} />
            <Text fontSize="sm">
              {language === 'en' && 'Language preference is saved automatically'}
              {language === 'ms' && 'Keutamaan bahasa disimpan secara automatik'}
              {language === 'zh' && '语言偏好会自动保存'}
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default LanguageSelector;
