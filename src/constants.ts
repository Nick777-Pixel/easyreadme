import { Template } from '@/types'

import {
  parseBuildGradle,
  parseCargo,
  parseComposerJson,
  parseGoMod,
  parsePackageJson,
  parsePipFile,
  parsePom,
  parsePyProject,
  parseRequirementsTxt
} from './utils/parse'

export const LANGUAGES_SETUP = [
  {
    language: 'JavaScript',
    fileDependencies: ['package.json'],
    commands: {
      install: ['pnpm install', 'bun install', 'npm install', 'yarn install'],
      run: ['pnpm dev', 'bun dev', 'npm run dev', 'yarn dev'],
      test: ['npm run test']
    }
  },
  {
    language: 'TypeScript',
    fileDependencies: ['package.json'],
    commands: {
      install: ['pnpm install', 'bun install', 'npm install', 'yarn install'],
      run: ['pnpm dev', 'bun dev', 'npm run dev', 'yarn dev'],
      test: ['npm run test']
    }
  },
  {
    language: 'Svelte',
    fileDependencies: ['package.json'],
    commands: {
      install: ['pnpm install', 'bun install', 'npm install', 'yarn install'],
      run: ['pnpm dev', 'bun dev', 'npm run dev', 'yarn dev'],
      test: ['npm run test']
    }
  },
  {
    language: 'Astro',
    fileDependencies: ['package.json'],
    commands: {
      install: ['pnpm install', 'bun install', 'npm install', 'yarn install'],
      run: ['pnpm dev', 'bun dev', 'npm run dev', 'yarn dev'],
      test: ['npm run test']
    }
  },
  {
    language: 'Vue',
    fileDependencies: ['package.json'],
    commands: {
      install: ['pnpm install', 'bun install', 'npm install', 'yarn install'],
      run: ['pnpm dev', 'bun dev', 'npm run dev', 'yarn dev'],
      test: ['npm run test']
    }
  },
  {
    language: 'Python',
    fileDependencies: ['Pipfile', 'pyproject.toml', 'requirements.txt'],
    commands: {
      install: ['pip install -r requirements.txt'],
      run: ['python app.py'],
      test: ['pytest']
    }
  },
  {
    language: 'Java',
    fileDependencies: ['build.gradle', 'pom.xml'],
    commands: {
      install: ['mvn install'],
      run: ['java -jar app.jar'],
      test: ['mvn test']
    }
  },
  {
    language: 'PHP',
    fileDependencies: ['composer.json'],
    commands: {
      install: ['composer install'],
      run: ['php main.php'],
      test: ['phpunit']
    }
  },
  {
    language: 'Go',
    fileDependencies: ['go.mod'],
    commands: {
      install: ['go build -o myapp'],
      run: ['go run main.go'],
      test: ['go test']
    }
  },
  {
    language: 'Rust',
    fileDependencies: ['Cargo.toml'],
    commands: {
      install: ['cargo build'],
      run: ['cargo run'],
      test: ['cargo test']
    }
  }
]

export const LANGUAGES_FILES_PARSERS: Record<string, any> = {
  'package.json': parsePackageJson,
  Pipfile: parsePipFile,
  'pyproject.toml': parsePyProject,
  'requirements.txt': parseRequirementsTxt,
  'build.gradle': parseBuildGradle,
  'pom.xml': parsePom,
  'composer.json': parseComposerJson,
  'go.mod': parseGoMod,
  'cargo.toml': parseCargo
}

const BADGES_URL = 'https://img.shields.io/github'
export const FORKS_URL = `${BADGES_URL}/forks`
export const CODESIZE_URL = `${BADGES_URL}/languages/code-size`
export const STARS_URL = `${BADGES_URL}/stars`
export const WATCHERS_URL = `${BADGES_URL}/watchers`
export const CONTRIBUTORS_URL = `${BADGES_URL}/contributors`
export const LAST_COMMIT_URL = `${BADGES_URL}/last-commit`
export const LICENSE_URL = `${BADGES_URL}/license`
export const TOP_LANGUAGE_URL = `${BADGES_URL}/languages/top`
export const COMMIT_ACTIVITY_MONTH_URL = `${BADGES_URL}/commit-activity/m`
export const DISCUSSIONS_URL = `${BADGES_URL}/discussions`
export const ISSUES_URL = `${BADGES_URL}/issues`
export const PULL_REQUESTS_URL = `${BADGES_URL}/issues-pr`
export const DEPLOYMENTS_URL = `${BADGES_URL}/deployments`

export const DEFAULT_TEMPLATES: Template[] = [
  {
    srcImage: '/templates/minimal.webp',
    altImage: 'Screenshot template Minimal',
    nameTemplate: 'Minimal',
    description:
      'Simplify README creation effortlessly. Craft clear and user-friendly project documentation using this template.',
    sections: ['overview', 'setting-up', 'run-locally', 'deploy', 'license'],
    srcVideo:
      'https://res.cloudinary.com/xavimon/video/upload/q_auto/v1696782241/easyreadme/templates/demos/minimal_mqefxi.mp4'
  },
  {
    srcImage: '/templates/collaborate.webp',
    altImage: 'Screenshot template Collaborate',
    nameTemplate: 'Collaborate',
    description:
      'Enhance project collaboration with comprehensive project docs. Streamline setup, development, and collaboration processes for smoother project execution.',
    sections: [
      'banner',
      'badges',
      'table-contents',
      'stack',
      'project-summary',
      'setting-up',
      'run-locally',
      'contributors',
      'license'
    ],
    srcVideo:
      'https://res.cloudinary.com/xavimon/video/upload/q_auto/v1696782241/easyreadme/templates/demos/collab_nn15cr.mp4'
  },
  {
    srcImage: '/templates/inspire.webp',
    altImage: 'Screenshot template Inspire',
    nameTemplate: 'Inspire',
    description:
      'From project structure to deployment, Inspire streamlines every aspect for seamless development and collaboration.',
    sections: [
      'banner',
      'badges',
      'overview',
      'table-contents',
      'project-structure',
      'project-summary',
      'stack',
      'setting-up',
      'run-locally',
      'contributors',
      'deploy',
      'license'
    ],
    srcVideo:
      'https://res.cloudinary.com/xavimon/video/upload/q_auto/v1696782241/easyreadme/templates/demos/inspire_aaoefb.mp4'
  },
  {
    srcImage: '/templates/empower.webp',
    altImage: 'Screenshot template Empower',
    nameTemplate: 'Empower',
    description:
      'Empower your project with structured documentation. Facilitate setup, development, and future planning for a more impactful project.',
    sections: [
      'overview',
      'table-contents',
      'stack',
      'setting-up',
      'run-locally',
      'roadmap',
      'acknowledgements',
      'changelog'
    ],
    srcVideo:
      'https://res.cloudinary.com/xavimon/video/upload/q_auto/v1696782241/easyreadme/templates/demos/emp_bkyg5x.mp4'
  },
  {
    srcImage: '/templates/unleash.webp',
    altImage: 'Screenshot template Pinnacle',
    nameTemplate: 'Unleash',
    description:
      'Unleash the full potential of your project with a dynamic documentation hub. From setup to FAQs, empower your team for a seamless project journey.',
    sections: [
      'banner',
      'badges',
      'overview',
      'table-contents',
      'project-structure',
      'prerequisites',
      'run-locally',
      'faq',
      'roadmap',
      'acknowledgements',
      'license'
    ],
    srcVideo:
      'https://res.cloudinary.com/xavimon/video/upload/q_auto/v1696782242/easyreadme/templates/demos/unleash_gicncc.mp4'
  }
]

export const README_SECTIONS = {
  banner: '🏞️ Banner',
  stack: '💻 Stack',
  'project-summary': '📝 Project Summary',
  'setting-up': '⚙️ Setting Up',
  'run-locally': '🚀 Run Locally',
  contributors: '🙌 Contributors',
  license: '📄 License',
  'project-structure': '📁 Project Structure',
  deploy: '☁️ Deploy',
  roadmap: '🗺️ Roadmap',
  acknowledgements: '🙏 Acknowledgements',
  changelog: '📜 Changelog',
  prerequisites: '✅ Prerequisites',
  faq: '🤔 FAQ',
  commands: '⚡ Commands',
  'table-contents': '🔍 Table of Contents',
  overview: '📌 Overview',
  badges: '🛡️ Badges'
}

export const APP_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://easyreadme.vercel.app'

export const RATE_LIMIT = 8

export const DEFAULT_CONTENT = `<p style="text-align:center;">
<img src='illustrations/process.svg' height="30%" width="30%" alt="Illustration" />
</p>

<p></p>
<p></p>

# ✨ Welcome to easyreadme

Ready to create a stunning README for your project? 👀


1. **Enter your GitHub Repository URL 🔗**.
2. **Choose a template that suits your project 🤔**.
3. **Click the Generate ⚡️ Button**.
`
