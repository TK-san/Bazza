/**
 * Bazza App - Main Application Component
 * Yorozuya-style all-in-one service marketplace for Malaysia
 */
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

// Context Providers
import { FavoritesProvider } from './context/FavoritesContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import { LanguageProvider, useLanguage } from './i18n';

// Layout Components
import Header from './components/layout/Header';
import BottomNav from './components/common/BottomNav';

// Page Components
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import OffersLandingPage from './pages/OffersLandingPage';
import RequestsLandingPage from './pages/RequestsLandingPage';
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

  // Sub-view state for offers/requests tabs: null (landing) or category id (filtered list)
  const [offersCategory, setOffersCategory] = useState(null);
  const [requestsCategory, setRequestsCategory] = useState(null);

  // Navigation handler
  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
    if (screen === 'main') {
      setActiveTab('offers'); // Reset to offers tab when entering main app
      setOffersCategory(null); // Reset to landing page
      setRequestsCategory(null);
    }
  };

  // Handle tab change - reset to landing page
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'offers') {
      setOffersCategory(null);
    } else if (tab === 'requests') {
      setRequestsCategory(null);
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
        // Show landing page or filtered list based on offersCategory
        if (offersCategory === null) {
          return <OffersLandingPage onSelectCategory={setOffersCategory} />;
        }
        return (
          <OffersPage
            initialCategory={offersCategory}
            onBack={() => setOffersCategory(null)}
          />
        );
      case 'requests':
        // Show landing page or filtered list based on requestsCategory
        if (requestsCategory === null) {
          return <RequestsLandingPage onSelectCategory={setRequestsCategory} />;
        }
        return (
          <RequestsPage
            initialCategory={requestsCategory}
            onBack={() => setRequestsCategory(null)}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            onSignOut={() => handleNavigate('home')}
            onViewFavorites={() => handleNavigate('favorites')}
            onChangeLanguage={() => handleNavigate('language')}
          />
        );
      default:
        return <OffersLandingPage onSelectCategory={setOffersCategory} />;
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
            <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
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
        <RecentlyViewedProvider>
          <Box
            maxW="480px"
            mx="auto"
            minH="100vh"
            bg="white"
            boxShadow={{ base: 'none', md: 'xl' }}
          >
            {renderScreen()}
          </Box>
        </RecentlyViewedProvider>
      </FavoritesProvider>
    );
  }

  return (
    <FavoritesProvider>
      <RecentlyViewedProvider>
        {renderScreen()}
      </RecentlyViewedProvider>
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
