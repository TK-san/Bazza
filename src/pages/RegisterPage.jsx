/**
 * RegisterPage
 * Mock registration form for new users
 */
import { useState } from 'react';
import { Box, VStack, Input, Button, Text, HStack, Separator } from '@chakra-ui/react';
import { FaArrowLeft, FaGoogle, FaFacebook } from 'react-icons/fa';
import BazzaLogo from '../components/common/BazzaLogo';
import { useLanguage } from '../i18n';

const RegisterPage = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Mock registration - just navigate to main app
    onNavigate('main');
  };

  return (
    <Box minH="100vh" bg="white" px={6} py={4} overflowY="auto">
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
      <Box display="flex" justifyContent="center" mb={6}>
        <BazzaLogo size="sm" />
      </Box>

      {/* Form */}
      <VStack gap={4} w="full" maxW="320px" mx="auto" pb={8}>
        <Text fontSize="2xl" fontWeight="bold" color="gray.800" alignSelf="start">
          {t('register.createAccount')}
        </Text>
        <Text fontSize="sm" color="gray.500" alignSelf="start" mt={-2} mb={2}>
          {t('register.joinBazza')}
        </Text>

        {/* Name Input */}
        <Box w="full">
          <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={1}>
            {t('register.fullName')}
          </Text>
          <Input
            type="text"
            placeholder={t('register.namePlaceholder')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            h="48px"
            borderRadius="lg"
            bg="gray.50"
            border="none"
            _focus={{ bg: 'gray.100', outline: 'none' }}
          />
        </Box>

        {/* Phone Input */}
        <Box w="full">
          <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={1}>
            {t('register.phoneNumber')}
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
              placeholder={t('register.phonePlaceholder')}
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
            {t('register.password')}
          </Text>
          <Input
            type="password"
            placeholder={t('register.passwordPlaceholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            h="48px"
            borderRadius="lg"
            bg="gray.50"
            border="none"
            _focus={{ bg: 'gray.100', outline: 'none' }}
          />
        </Box>

        {/* Confirm Password Input */}
        <Box w="full">
          <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={1}>
            {t('register.confirmPassword')}
          </Text>
          <Input
            type="password"
            placeholder={t('register.confirmPlaceholder')}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            h="48px"
            borderRadius="lg"
            bg="gray.50"
            border="none"
            _focus={{ bg: 'gray.100', outline: 'none' }}
          />
        </Box>

        {/* Terms */}
        <Text fontSize="xs" color="gray.500" textAlign="center" px={2}>
          {t('register.termsText')}{' '}
          <Text as="span" color="blue.500" cursor="pointer">{t('register.termsLink')}</Text>
          {' '}{t('register.and')}{' '}
          <Text as="span" color="blue.500" cursor="pointer">{t('register.privacyLink')}</Text>
        </Text>

        {/* Register Button */}
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
          onClick={handleRegister}
          mt={2}
        >
          {t('register.createButton')}
        </Button>

        {/* Divider */}
        <HStack w="full" gap={4} my={2}>
          <Separator flex={1} />
          <Text fontSize="xs" color="gray.400">{t('register.orSignUpWith')}</Text>
          <Separator flex={1} />
        </HStack>

        {/* Social Sign-Up */}
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

        {/* Sign In Link */}
        <HStack gap={1} mt={4}>
          <Text fontSize="sm" color="gray.500">
            {t('register.haveAccount')}
          </Text>
          <Text
            fontSize="sm"
            color="blue.500"
            fontWeight="semibold"
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
            onClick={() => onNavigate('signin')}
          >
            {t('register.signIn')}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default RegisterPage;
