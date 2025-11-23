import NavigationBar from '../components/navigationbar';

export const metadata = {
  title: 'About | Julius San Jose',
  description: 'Learn more about me and my journey',
};

export default function AboutPage() {
  return (
    <div>
      <NavigationBar />
      <main className="page-content">
        <h1>About Me</h1>
        <p>Learn more about my journey and experience.</p>
      </main>
    </div>
  );
}
