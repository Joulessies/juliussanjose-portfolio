import NavigationBar from './components/navigationbar';
import HomeContent from './home/home-content';

export const metadata = {
  title: 'Home | Julius San Jose',
  description: 'Welcome to my portfolio homepage',
};

export default function Home() {
  return (
    <div className="home-page">
      <NavigationBar />
      <main className="home-page__content">
        <HomeContent />
      </main>
    </div>
  );
}
