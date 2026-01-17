import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next"; // আপনি এটি ইম্পোর্ট করেছেন

const eslintConfig = defineConfig([
  ...nextCoreWebVitals, // এখানে 'nextVitals' এর বদলে 'nextCoreWebVitals' ব্যবহার করুন

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
