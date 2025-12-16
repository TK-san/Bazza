/**
 * SignInPage
 * Mock sign-in form for authentication
 */
import { useState } from 'react';
import { Box, VStack, Input, Button, Text, HStack, Separator } from '@chakra-ui/react';
import { FaArrowLeft, FaGoogle, FaFacebook } from 'react-icons/fa';
import BazzaLogo from '../components/common/BazzaLogo';
import { useLanguage } from '../i18n';

const SignInPage = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Mock sign-in - just navigate to main app
    onNavigate('main');
  };

  return (
    <Box minH="100vh" bg="white" px={6} py={4}>
      {/* Back Button */}
      <Button
        variant="ghost"
        p={0}
        minW="auto"
        h="auto"
        color="gray.600"
        onClick={() => onNavigate('home')}
        mb={4}
      >
        <Box as={FaArrowLeft} boxSize={5} />
      </Button>

      {/* Logo */}
      <Box display="flex" justifyContent="center" mb={8}>
        <BazzaLogo size="sm" />
      </Box>

      {/* Form */}
      <VStack gap={4} w="full" maxW="320px" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" color="gray.800" alignSelf="start">
          {t('signIn.welcomeBack')}
        </Text>
        <Text fontSize="sm" color="gray.500" alignSelf="start" mt={-2} mb={2}>
          {t('signIn.signInToContinue')}
        </Text>

        {/* Phone Input */}
        <Box w="full">
          <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={1}>
            {t('signIn.phoneNumber')}
          </Text>
          <HStack gap={0}>
            <Box
              px={3}
              h="48px"
              bg="gray.100"
              borderRadius="lg"
              borderRightRadius={0}
              display="flex"
              alignItems="center"
              color="gray.600"
              fontSize="sm"
            >
              +60
            </Box>
            <Input
              type="tel"
              placeholder={t('signIn.phonePlaceholder')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              h="48px"
              borderRadius="lg"
              borderLeftRadius={0}
              bg="gray.50"
              border="none"
              _focus={{ bg: 'gray.100', outline: 'none' }}
            />
          </HStack>
        </Box>

        {/* Password Input */}
        <Box w="full">
          <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={1}>
            {t('signIn.password')}
          </Text>
          <Input
            type="password"
            placeholder={t('signIn.passwordPlaceholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            h="48px"
            borderRadius="lg"
            bg="gray.50"
            border="none"
            _focus={{ bg: 'gray.100', outline: 'none' }}
          />
        </Box>

        {/* Forgot Password */}
        <Text
          fontSize="sm"
          color="blue.500"
          alignSelf="end"
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
        >
          {t('signIn.forgotPassword')}
        </Text>

        {/* Sign In Button */}
        <Button
          w="full"
          size="lg"
          h="52px"
          bg="blue.500"
          color="white"
          borderRadius="full"
          fontSize="md"
          fontWeight="semibold"
          _hover={{ bg: 'blue.600' }}
          _active={{ bg: 'blue.700' }}
          onClick={handleSignIn}
          mt={2}
        >
          {t('signIn.signInButton')}
        </Button>

        {/* Divider */}
        <HStack w="full" gap={4} my={2}>
          <Separator flex={1} />
          <Text fontSize="xs" color="gray.400">{t('signIn.orContinueWith')}</Text>
          <Separator flex={1} />
        </HStack>

        {/* Social Sign-In */}
        <HStack gap={4} w="full">
          <Button
            flex={1}
            h="48px"
            variant="outline"
            borderColor="gray.200"
            borderRadius="lg"
            _hover={{ bg: 'gray.50' }}
          >
            <Box as={FaGoogle} color="red.500" />
          </Button>
          <Button
            flex={1}
            h="48px"
            variant="outline"
            borderColor="gray.200"
            borderRadius="lg"
            _hover={{ bg: 'gray.50' }}
          >
            <Box as={FaFacebook} color="blue.600" />
          </Button>
        </HStack>

        {/* Register Link */}
        <HStack gap={1} mt={4}>
          <Text fontSize="sm" color="gray.500">
            {t('signIn.noAccount')}
          </Text>
          <Text
            fontSize="sm"
            color="blue.500"
            fontWeight="semibold"
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
            onClick={() => onNavigate('register')}
          >
            {t('signIn.register')}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SignInPage;
