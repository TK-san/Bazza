/**
 * HomePage
 * Landing page with Bazza branding and sign-in/register options
 */
import { useState } from 'react';
import { Box, VStack, Button, Text, HStack, IconButton } from '@chakra-ui/react';
import { FaGlobe, FaCheck } from 'react-icons/fa';
import BazzaLogo from '../components/common/BazzaLogo';
import { useLanguage } from '../i18n';

const LANGUAGES = [
  { code: 'en', name: 'English', icon: 'EN', bg: 'blue.500' },
  { code: 'ms', name: 'Bahasa Melayu', icon: 'MY', bg: 'yellow.500' },
  { code: 'zh', name: '中文', icon: '中', bg: 'red.500' },
];

const HomePage = ({ onNavigate }) => {
  const { t, language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setShowLangMenu(false);
  };

  return (
    <Box
      minH="100vh"
      bg="linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={6}
      py={10}
      position="relative"
    >
      {/* Language Selector Button */}
      <Box position="absolute" top={4} right={4}>
        <IconButton
          aria-label="Change language"
          variant="ghost"
          borderRadius="full"
          color="gray.600"
          bg="white"
          boxShadow="sm"
          _hover={{ bg: 'gray.100' }}
          onClick={() => setShowLangMenu(!showLangMenu)}
        >
          <FaGlobe />
        </IconButton>

        {/* Language Dropdown Menu */}
        {showLangMenu && (
          <>
            {/* Backdrop */}
            <Box
              position="fixed"
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={90}
              onClick={() => setShowLangMenu(false)}
            />

            {/* Menu */}
            <Box
              position="absolute"
              top="100%"
              right={0}
              mt={2}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              zIndex={100}
              minW="180px"
              py={2}
            >
              {LANGUAGES.map((lang) => (
                <HStack
                  key={lang.code}
                  px={4}
                  py={3}
                  cursor="pointer"
                  bg={language === lang.code ? 'blue.50' : 'transparent'}
                  _hover={{ bg: language === lang.code ? 'blue.50' : 'gray.50' }}
                  onClick={() => handleLanguageChange(lang.code)}
                  gap={3}
                >
                  <Box
                    w={7}
                    h={7}
                    borderRadius="full"
                    bg={lang.bg}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      color="white"
                    >
                      {lang.icon}
                    </Text>
                  </Box>
                  <Text
                    flex={1}
                    fontSize="sm"
                    fontWeight={language === lang.code ? 'semibold' : 'normal'}
                    color={language === lang.code ? 'blue.600' : 'gray.700'}
                  >
                    {lang.name}
                  </Text>
                  {language === lang.code && (
                    <Box as={FaCheck} color="blue.500" boxSize={3} />
                  )}
                </HStack>
              ))}
            </Box>
          </>
        )}
      </Box>
      {/* Logo Section */}
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <BazzaLogo size="lg" />
      </Box>

      {/* Description */}
      <VStack gap={2} mb={8} textAlign="center">
        <Text fontSize="sm" color="gray.500" maxW="280px">
          {t('appSubDescription')}
        </Text>
      </VStack>

      {/* Action Buttons */}
      <VStack gap={3} w="full" maxW="320px" mb={6}>
        <Button
          w="full"
          size="lg"
          h="56px"
          bg="blue.500"
          color="white"
          borderRadius="full"
          fontSize="md"
          fontWeight="semibold"
          _hover={{ bg: 'blue.600' }}
          _active={{ bg: 'blue.700' }}
          onClick={() => onNavigate('signin')}
        >
          {t('home.signIn')}
        </Button>
        <Button
          w="full"
          size="lg"
          h="56px"
          variant="outline"
          borderColor="blue.500"
          color="blue.500"
          borderRadius="full"
          fontSize="md"
          fontWeight="semibold"
          borderWidth="2px"
          _hover={{ bg: 'blue.50' }}
          _active={{ bg: 'blue.100' }}
          onClick={() => onNavigate('register')}
        >
          {t('home.createAccount')}
        </Button>
      </VStack>

      {/* Browse as Guest */}
      <Button
        variant="ghost"
        color="gray.500"
        fontSize="sm"
        _hover={{ color: 'gray.700' }}
        onClick={() => onNavigate('main')}
      >
        {t('home.browseAsGuest')}
      </Button>

      {/* Footer */}
      <HStack gap={4} mt={8} fontSize="xs" color="gray.400">
        <Text cursor="pointer" _hover={{ color: 'gray.600' }}>{t('home.terms')}</Text>
        <Text>•</Text>
        <Text cursor="pointer" _hover={{ color: 'gray.600' }}>{t('home.privacy')}</Text>
        <Text>•</Text>
        <Text cursor="pointer" _hover={{ color: 'gray.600' }}>{t('home.help')}</Text>
      </HStack>
    </Box>
  );
};

export default HomePage;
