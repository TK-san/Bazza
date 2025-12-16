/**
 * PullToRefresh Component
 * Visual indicator for pull-to-refresh gesture
 */
import { Box, Text, Spinner } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import { useLanguage } from '../../i18n';

const PullToRefresh = ({ pullDistance, isRefreshing, progress }) => {
  const { t } = useLanguage();
  // Only show when pulling or refreshing
  if (pullDistance <= 0 && !isRefreshing) return null;

  // Calculate rotation based on progress (0 to 180 degrees)
  const rotation = progress >= 1 ? 180 : progress * 180;

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h={`${Math.max(pullDistance, isRefreshing ? 60 : 0)}px`}
      bg="gray.50"
      overflow="hidden"
      transition={!isRefreshing && pullDistance === 0 ? 'height 0.3s ease' : 'none'}
      zIndex={10}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        opacity={Math.min(progress * 2, 1)}
        transform={`translateY(${Math.max(0, pullDistance - 40)}px)`}
      >
        {isRefreshing ? (
          <>
            <Spinner size="sm" color="blue.500" mb={1} />
            <Text fontSize="xs" color="gray.500">
              {t('refresh.refreshing')}
            </Text>
          </>
        ) : (
          <>
            <Box
              as={FaArrowDown}
              boxSize={4}
              color={progress >= 1 ? 'blue.500' : 'gray.400'}
              transform={`rotate(${rotation}deg)`}
              transition="transform 0.2s ease, color 0.2s ease"
              mb={1}
            />
            <Text fontSize="xs" color={progress >= 1 ? 'blue.500' : 'gray.500'}>
              {progress >= 1 ? t('refresh.releaseToRefresh') : t('refresh.pullToRefresh')}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
};

export default PullToRefresh;
