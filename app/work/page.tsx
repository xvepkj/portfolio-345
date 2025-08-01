export default function WorkPage() {
  return (
    <main className="flex flex-col items-center gap-12 py-8 sm:py-12 px-4 sm:px-6 md:px-0 max-w-4xl mx-auto">

      {/* ParallelDots */}
      <div className="w-full border rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="font-bold text-xl text-blue-600">
          ParallelDots (US Retail Solutions)
        </h2>
        <p className="text-gray-700 font-semibold">
          Software Engineer • September 2023 - Present
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-2 text-sm text-gray-800">
          <li>
            Designed and developed Android core features in the Shelfwatch app, including automatic image capture, blur detection,
            smart cropping, overlap tracking, and tilt detection, enhancing retail store planning for major US CPG clients.
          </li>
          <li>
            Leading a team of 3 to develop AR experiences using ARCore and Unity, incorporating complex 3D models and spatial mapping
            to enable real-time SKU detection, boundary highlighting, and improved image stitching.
          </li>
          <li>
            Delivered performance optimisations — reduced SDK peak RAM usage from 1 GB to 200 MB by isolating on-disk images from previews;
            reduced image upload latency by 80% using Firebase Threadpool Manager’s multithreading.
          </li>
          <li>
            Managed technical client interactions for SDK and AR integration with over 5 clients, including Fortune 500 retail giants.
          </li>
        </ul>
      </div>

      {/* Flobiz */}
      <div className="w-full border rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="font-bold text-xl text-blue-600">
          Flobiz (Fintech Startup - 1M DAU)
        </h2>
        <p className="text-gray-700 font-semibold">
          Software Engineer • May 2022 - December 2022
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-2 text-sm text-gray-800">
          <li>
            Designed and developed core app functionalities, including Merchant Report Generation and App Paywall, using MVVM modular architecture.
          </li>
          <li>
            Enhanced Merchant Report Generation by leveraging Retrofit APIs for advanced filtering, downloading, and sharing capabilities.
          </li>
          <li>
            Mentored interns and new hires during ramp-up to Flobiz tech stack and release process.
          </li>
        </ul>

        <p className="text-gray-700 font-semibold mt-4">
          Software Engineering Intern • September 2021 - April 2022
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-2 text-sm text-gray-800">
          <li>
            Developed GST-based data autofill features to streamline user onboarding.
          </li>
          <li>
            Developed multiple features such as Payment Voice Notification and Cashback Rewards.
          </li>
        </ul>
      </div>

    </main>
  );
}
