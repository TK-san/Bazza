/**
 * BazzaLogo Component
 * Bazza brand logo with marketplace icon representing service hub
 */
import { Box, VStack, Text } from '@chakra-ui/react';
import { FaStore } from 'react-icons/fa';
import { useLanguage } from '../../i18n';

const BazzaLogo = ({ size = 'lg' }) => {
  const { t } = useLanguage();

  const sizes = {
    sm: { icon: '60px', iconSize: 7, text: '2xl', tagline: 'xs' },
    md: { icon: '80px', iconSize: 10, text: '3xl', tagline: 'sm' },
    lg: { icon: '120px', iconSize: 14, text: '5xl', tagline: 'md' },
  };

  const s = sizes[size] || sizes.lg;

  return (
    <VStack gap={2}>
      {/* Logo Icon - Marketplace/Store representing service hub */}
      <Box
        w={s.icon}
        h={s.icon}
        borderRadius="2xl"
        bg="linear-gradient(135deg, #f472b6 0%, #fb923c 100%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="xl"
        position="relative"
        overflow="hidden"
      >
        {/* Decorative circles */}
        <Box
          position="absolute"
          top="-20%"
          right="-20%"
          w="60%"
          h="60%"
          borderRadius="full"
          bg="rgba(255,255,255,0.2)"
        />
        <Box
          position="absolute"
          bottom="-10%"
          left="-10%"
          w="40%"
          h="40%"
          borderRadius="full"
          bg="rgba(255,255,255,0.15)"
        />
        {/* Store Icon */}
        <Box
          as={FaStore}
          boxSize={s.iconSize}
          color="white"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
        />
      </Box>

      {/* Brand Name */}
      <Text
        fontSize={s.text}
        fontWeight="bold"
        bgGradient="to-r"
        gradientFrom="blue.500"
        gradientTo="cyan.500"
        bgClip="text"
        letterSpacing="-1px"
      >
        {t('appName')}
      </Text>

      {/* Tagline */}
      <Text fontSize={s.tagline} color="gray.500" textAlign="center">
        {t('appTagline')}
      </Text>
    </VStack>
  );
};

export default BazzaLogo;
