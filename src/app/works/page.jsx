import NavigationBar from '../components/navigationbar';

export const metadata = {
  title: 'Works | Julius San Jose',
  description: 'Explore my portfolio of projects and creative works',
};

export default function WorksPage() {
  return (
    <div>
      <NavigationBar />
      <main className="page-content">
        <h1>My Works</h1>
        <p>Here you'll find my portfolio of projects.</p>
      </main>
    </div>
  );
}
