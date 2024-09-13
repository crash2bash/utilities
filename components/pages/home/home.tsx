import { FC } from 'react';

import CloudinaryForm from './components/cloudinary-form';

const HomePage: FC = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section>
          <h2 className="text-2xl font-bold text-center">Optimize Cloudinary link in one click!</h2>
          <CloudinaryForm />
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default HomePage;
