const techDetails = {
  frontend: (
    <div className="border mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/angular-svgrepo-com.svg"
            alt="Angular"
          />
          <p className="text-center mt-2">Angular</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/js-official-svgrepo-com.svg"
            alt="JavaScript"
          />
          <p className="text-center mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/next-js-svgrepo-com.svg"
            alt="Next.js"
          />
          <p className="text-center mt-2">Next.js</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/react-javascript-js-framework-facebook-svgrepo-com.svg"
            alt="React"
          />
          <p className="text-center mt-2">React</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/typescript-svgrepo-com.svg"
            alt="TypeScript"
          />
          <p className="text-center mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/vue-dot-js-svgrepo-com.svg"
            alt="Vue.js"
          />
          <p className="text-center mt-2">Vue.js</p>
        </div>
      </div>
    </div>
  ),

  backend: (
    <div className="border mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-20 h-20 object-contain"
            src="/TechnologyStack/django-svgrepo-com.svg"
            alt="dJango"
          />
          <p className="text-center mt-2">Django</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/laravel-svgrepo-com.svg"
            alt="JavaScript"
          />
          <p className="text-center mt-2">Laravel</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/node-js-svgrepo-com.svg"
            alt="Next.js"
          />
          <p className="text-center mt-2">Node JS</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/python-svgrepo-com.svg"
            alt="React"
          />
          <p className="text-center mt-2">Python</p>
        </div>
      </div>
    </div>
  ),
  mobile: (
    <div className="border mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-20 h-20 object-contain"
            src="/TechnologyStack/flutter-svgrepo-com.svg"
            alt="Flutter"
          />
          <p className="text-center mt-2">Flutter</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/ionic-svgrepo-com.svg"
            alt="JavaScript"
          />
          <p className="text-center mt-2">Ionic</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/react-svgrepo-com.svg"
            alt="Next.js"
          />
          <p className="text-center mt-2">React Native</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/xamarin-svgrepo-com.svg"
            alt="React"
          />
          <p className="text-center mt-2">Xamrin</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <img
            className="w-16 h-16 object-contain"
            src="/TechnologyStack/apache-cordova-svgrepo-com.svg"
            alt="React"
          />
          <p className="text-center mt-2">Apache Cordova</p>
        </div>
      </div>
    </div>
  ),
  aiml: (
    <ul className="list-disc pl-5 text-gray-700">
      <li>TensorFlow</li>
      <li>PyTorch</li>
      <li>Keras</li>
      <li>Scikit-learn</li>
    </ul>
  ),
  database: (
    <ul className="list-disc pl-5 text-gray-700">
      <li>MySQL</li>
      <li>PostgreSQL</li>
      <li>MongoDB</li>
      <li>SQLite</li>
    </ul>
  ),
  frameworks: (
    <ul className="list-disc pl-5 text-gray-700">
      <li>Next.js</li>
      <li>Nuxt.js</li>
      <li>Spring Boot</li>
      <li>ASP.NET Core</li>
    </ul>
  ),
};

export default techDetails;
