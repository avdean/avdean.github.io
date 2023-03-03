import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "", // Get this from tina.io
  token: "", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "About",
        name: "about",
        path: "content/about",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "tagline",
            label: "tagline",
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        label: "Jobs",
        name: "jobs",
        path: "data/jobs",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "Projects",
        name: "projects",
        path: "content/projects",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "string",
            name: "subTitle",
            label: "subTitle",
          },
          {
            type: "image",
            name: "FeatureImage",
            label: "FeatureImage",
          },
          {
            type: "boolean",
            name: "wideImage",
            label: "Wide Image on Home",
          },
          {
            type: "boolean",
            name: "largeImages",
            label: "largeImages",
          },
        ],
      },
      {
        label: "Articles",
        name: "articles",
        path: "content/articles",
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "datetime",
                name: "date",
                label: "Date",
              },
              {
                type: "string",
                name: "subTitle",
                label: "subTitle",
              },
              {
                type: "image",
                name: "FeatureImage",
                label: "FeatureImage",
              },
              {
                type: "boolean",
                name: "wideImage",
                label: "wideImage",
              },
            ],
            label: "basic_article",
            name: "basic_article",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "datetime",
                name: "date",
                label: "date",
              },
              {
                type: "string",
                name: "subTitle",
                label: "subTitle",
              },
              {
                type: "image",
                name: "FeatureImage",
                label: "FeatureImage",
              },
              {
                type: "boolean",
                name: "wideImage",
                label: "Wide Image on Home",
              },
              {
                type: "boolean",
                name: "largeImages",
                label: "largeImages",
              },
            ],
            label: "photo_essay",
            name: "photo_essay",
          },
        ],
      },
    ],
  },
});
