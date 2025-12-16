/**
 * ProfilePage
 * User profile and settings placeholder (Chakra UI v3)
 */
import { Box, VStack, Heading, Text, Button, HStack, Separator, Badge } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { FaCog, FaHistory, FaStar, FaPlus, FaSignOutAlt, FaHeart, FaGlobe } from 'react-icons/fa';
import { useFavoritesContext } from '../context/FavoritesContext';
import { useLanguage } from '../i18n';

const ProfilePage = ({ onSignOut, onViewFavorites, onChangeLanguage }) => {
  const { getFavoriteCount } = useFavoritesContext();
  const { t } = useLanguage();
  const totalFavorites = getFavoriteCount();

  // Placeholder menu items
  const menuItems = [
    {
      icon: FaHeart,
      label: t('profile.myFavorites'),
      sublabel: t('profile.savedItems'),
      badge: totalFavorites > 0 ? totalFavorites : null,
      badgeColor: 'red',
      onClick: onViewFavorites,
    },
    { icon: FaHistory, label: t('profile.myActivity'), sublabel: t('profile.activityDesc') },
    { icon: FaStar, label: t('profile.reviews'), sublabel: t('profile.reviewsDesc') },
    { icon: FaGlobe, label: t('profile.language'), sublabel: t('profile.languageDesc'), onClick: onChangeLanguage },
    { icon: FaCog, label: t('profile.settings'), sublabel: t('profile.settingsDesc') },
  ];

  return (
    <Box h="calc(100vh - 140px)" overflowY="auto" px={4} py={6}>
      {/* Profile Card */}
      <Box bg="white" borderRadius="xl" boxShadow="md" mb={6} p={6}>
        <VStack gap={4}>
          <Avatar.Root size="2xl">
            <Avatar.Fallback bg="blue.500" color="white" name={t('profile.guestUser')}>
              G
            </Avatar.Fallback>
          </Avatar.Root>
          <VStack gap={0}>
            <Heading size="md">{t('profile.guestUser')}</Heading>
            <Text fontSize="sm" color="gray.500">
              {t('profile.browsingAsGuest')}
            </Text>
          </VStack>
        </VStack>
      </Box>

      {/* Quick Actions */}
      <Box mb={6}>
        <Heading size="sm" mb={3} color="gray.600">
          {t('profile.quickActions')}
        </Heading>
        <HStack gap={3}>
          <Button
            flex={1}
            h="80px"
            bg="green.500"
            color="white"
            borderRadius="xl"
            flexDirection="column"
            _hover={{ bg: 'green.600' }}
          >
            <Box as={FaPlus} boxSize={5} mb={1} />
            <Text fontSize="sm">{t('profile.offerService')}</Text>
          </Button>
          <Button
            flex={1}
            h="80px"
            bg="orange.500"
            color="white"
            borderRadius="xl"
            flexDirection="column"
            _hover={{ bg: 'orange.600' }}
          >
            <Box as={FaPlus} boxSize={5} mb={1} />
            <Text fontSize="sm">{t('profile.postRequest')}</Text>
          </Button>
        </HStack>
      </Box>

      {/* Menu Items */}
      <Box bg="white" borderRadius="xl" boxShadow="md" overflow="hidden" mb={4}>
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Box key={item.label}>
              <HStack
                px={4}
                py={4}
                cursor="pointer"
                _hover={{ bg: 'gray.50' }}
                transition="background 0.2s"
                gap={3}
                onClick={item.onClick}
              >
                <Box as={IconComponent} boxSize={5} color={item.badge ? 'red.500' : 'gray.500'} />
                <VStack align="start" gap={0} flex={1}>
                  <HStack gap={2}>
                    <Text fontWeight="medium">{item.label}</Text>
                    {item.badge && (
                      <Badge
                        colorPalette={item.badgeColor}
                        borderRadius="full"
                        px={2}
                        fontSize="xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </HStack>
                  <Text fontSize="xs" color="gray.500">
                    {item.sublabel}
                  </Text>
                </VStack>
              </HStack>
              {index < menuItems.length - 1 && <Separator />}
            </Box>
          );
        })}
      </Box>

      {/* Sign Out Button */}
      <Button
        w="full"
        h="52px"
        variant="outline"
        borderColor="red.300"
        color="red.500"
        borderRadius="xl"
        _hover={{ bg: 'red.50' }}
        onClick={onSignOut}
        gap={2}
      >
        <Box as={FaSignOutAlt} />
        <Text>{t('profile.signOut')}</Text>
      </Button>

      {/* App Info */}
      <Text textAlign="center" fontSize="xs" color="gray.400" mt={6}>
        {t('version')}
      </Text>
    </Box>
  );
};

export default ProfilePage;
