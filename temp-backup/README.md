# Diabetes Revolution

A Hugo-based static blog website dedicated to diabetes education, management, and awareness. Created by Dr. Onyeije.

## About

Diabetes Revolution is an informational website aimed at providing valuable resources, insights, and guidance for individuals managing diabetes and healthcare professionals. The site features articles, tips, and expert advice on diabetes prevention, treatment, and lifestyle management.

## Features

- Fast, secure static website built with Hugo
- Responsive design that works on all devices
- SEO-optimized for better search visibility
- RSS feed support
- Clean, readable blog layout
- Math equation rendering (KaTeX)
- Image galleries (PhotoSwipe)
- Diagram support (Mermaid.js)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Hugo](https://gohugo.io/) (Extended version recommended)
  - Current version: v0.68.3 (consider upgrading to latest)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chukwumaonyeije/diabetes-revolution.git
   cd diabetes-revolution
   ```

2. **Initialize the theme submodule:**
   ```bash
   git submodule update --init --recursive
   ```

3. **Verify installation:**
   ```bash
   hugo version
   ```

## Local Development

### Running the Development Server

Start the Hugo development server with draft content enabled:

```bash
hugo server -D
```

The site will be available at `http://localhost:1313`

### Building for Production

Generate the static site files:

```bash
hugo
```

The generated site will be in the `public/` directory.

## Adding Content

### Creating a New Blog Post

1. **Generate a new post:**
   ```bash
   hugo new posts/my-new-post.md
   ```

2. **Edit the post:**
   Open `content/posts/my-new-post.md` and add your content:
   ```markdown
   ---
   title: "Understanding Type 2 Diabetes"
   date: 2024-01-15T10:00:00Z
   draft: false
   ---

   Your content here...
   ```

3. **Preview your post:**
   - Run `hugo server -D` to see drafts
   - Set `draft: false` when ready to publish

### Content Guidelines

When writing diabetes-related content:
- Ensure medical accuracy
- Cite reputable sources
- Include appropriate disclaimers
- Use clear, accessible language
- Consider adding relevant images or diagrams

## Project Structure

```
diabetes-revolution/
├── archetypes/          # Content templates
├── content/             # Markdown content files
│   └── posts/          # Blog posts
├── themes/             # Hugo themes
│   └── beautifulhugo/  # Beautiful Hugo theme
├── public/             # Generated static site (git-ignored)
├── static/             # Static assets (images, files)
├── config.toml         # Site configuration
└── README.md           # This file
```

## Configuration

Main site settings are in `config.toml`:

```toml
baseURL = "http://example.org/"  # Update with your domain
languageCode = "en-us"
title = "Diabetes Revolution- Created by Dr. Onyeije"
theme = "beautifulhugo"
```

### Important Configuration Steps

1. **Update baseURL:** Change to your actual domain
2. **Add author information:** Configure author details in config.toml
3. **Set up navigation:** Add menu items
4. **Configure social links:** Add social media profiles

See [Hugo documentation](https://gohugo.io/getting-started/configuration/) for advanced configuration options.

## Deployment

This site is configured for deployment on **Azure Static Web Apps** via GitHub Actions.

### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys the site
3. Changes go live at your Azure Static Web Apps URL

### Manual Deployment

You can also deploy to other platforms:

- **Netlify:** Connect your GitHub repo and deploy
- **GitHub Pages:** Use GitHub Actions workflow
- **Vercel:** Import your repository
- **AWS S3:** Upload the `public/` folder

## Theme

This site uses the [Beautiful Hugo](https://github.com/halogenica/beautifulhugo) theme, which is based on the Beautiful Jekyll theme.

### Theme Customization

To customize the theme:
- Modify `config.toml` for basic settings
- Override theme files by creating files in your project root
- See theme documentation for available options

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Content Contributions

If you're a healthcare professional or diabetes expert:
- Submit guest posts via pull requests
- Ensure content is medically accurate and properly sourced
- Include appropriate author attribution

## Medical Disclaimer

**Important:** The information provided on this website is for educational purposes only and is not intended as medical advice. Always consult with qualified healthcare professionals for diagnosis and treatment of diabetes or any other medical condition.

## License

[Specify your license here - e.g., MIT, Apache 2.0, Creative Commons, etc.]

## Contact

**Dr. Onyeije**

- Website: [Update with actual URL]
- Email: [Add contact email]
- GitHub: [@chukwumaonyeije](https://github.com/chukwumaonyeije)

## Acknowledgments

- Built with [Hugo](https://gohugo.io/)
- Theme: [Beautiful Hugo](https://github.com/halogenica/beautifulhugo)
- Deployed on Azure Static Web Apps

---

**Last Updated:** November 2024
