import { FC } from 'react';

import CloudinaryForm from './components/cloudinary-form';

const HomePage: FC = () => {
  return (
    <>
      <main>
        <section className="max-w-5xl w-full mx-auto px-4 flex flex-col min-h-screen justify-center gap-10">
          <div className="w-full flex flex-col gap-6 max-w-2xl mx-auto px-10">
            <h2 className="text-2xl font-bold text-center">Optimize Cloudinary link in one click!</h2>
            <div className="w-full max-w-[400px] mx-auto">
              <CloudinaryForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
};

export default HomePage;
