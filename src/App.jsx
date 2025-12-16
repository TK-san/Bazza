/**
 * Bazza App - Main Application Component
 * Yorozuya-style all-in-one service marketplace for Malaysia
 */
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

// Context Providers
import { FavoritesProvider } from './context/FavoritesContext';
import { LanguageProvider, useLanguage } from './i18n';

// Layout Components
import Header from './components/layout/Header';
import BottomNav from './components/common/BottomNav';

// Page Components
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import OffersPage from './pages/OffersPage';
import RequestsPage from './pages/RequestsPage';
import ProfilePage from './pages/ProfilePage';
import FavoritesPage from './pages/FavoritesPage';
import LanguageSelector from './components/common/LanguageSelector';

// Inner App component that uses language context
function AppContent() {
  const { t } = useLanguage();

  // Current screen: 'home' | 'signin' | 'register' | 'main' | 'favorites' | 'language'
  const [currentScreen, setCurrentScreen] = useState('home');

  // Active tab for main app: 'offers' | 'requests' | 'profile'
  const [activeTab, setActiveTab] = useState('offers');

  // Navigation handler
  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
    if (screen === 'main') {
      setActiveTab('offers'); // Reset to offers tab when entering main app
    }
  };

  // Get subtitle based on active tab
  const getSubtitle = () => {
    switch (activeTab) {
      case 'offers':
        return t('appTagline');
      case 'requests':
        return t('appTagline');
      case 'profile':
        return t('appTagline');
      default:
        return t('appTagline');
    }
  };

  // Render the active tab page
  const renderTabPage = () => {
    switch (activeTab) {
      case 'offers':
        return <OffersPage />;
      case 'requests':
        return <RequestsPage />;
      case 'profile':
        return (
          <ProfilePage
            onSignOut={() => handleNavigate('home')}
            onViewFavorites={() => handleNavigate('favorites')}
            onChangeLanguage={() => handleNavigate('language')}
          />
        );
      default:
        return <OffersPage />;
    }
  };

  // Render based on current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'signin':
        return <SignInPage onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} />;
      case 'favorites':
        return (
          <Box
            maxW="480px"
            mx="auto"
            minH="100vh"
            bg="gray.50"
            boxShadow={{ base: 'none', md: 'xl' }}
          >
            <FavoritesPage onBack={() => handleNavigate('main')} />
          </Box>
        );
      case 'language':
        return (
          <Box
            maxW="480px"
            mx="auto"
            minH="100vh"
            bg="gray.50"
            boxShadow={{ base: 'none', md: 'xl' }}
          >
            <LanguageSelector onBack={() => handleNavigate('main')} />
          </Box>
        );
      case 'main':
        return (
          <Box
            maxW="480px"
            mx="auto"
            minH="100vh"
            bg="gray.50"
            position="relative"
            boxShadow={{ base: 'none', md: 'xl' }}
          >
            {/* Header */}
            <Header subtitle={getSubtitle()} />

            {/* Main Content Area */}
            <Box pb="90px">
              {renderTabPage()}
            </Box>

            {/* Bottom Navigation */}
            <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
          </Box>
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Wrapper for auth screens (home, signin, register)
  if (currentScreen !== 'main' && currentScreen !== 'favorites' && currentScreen !== 'language') {
    return (
      <FavoritesProvider>
        <Box
          maxW="480px"
          mx="auto"
          minH="100vh"
          bg="white"
          boxShadow={{ base: 'none', md: 'xl' }}
        >
          {renderScreen()}
        </Box>
      </FavoritesProvider>
    );
  }

  return (
    <FavoritesProvider>
      {renderScreen()}
    </FavoritesProvider>
  );
}

// Main App component with providers
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
