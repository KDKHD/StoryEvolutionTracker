import mongoose, {Schema} from "mongoose";

const schema = new mongoose.Schema({
  articles: {
    _id: {
      primaryKey: true,
      type: "Object",
      required: true,
    },
    additional_data: {
      type: "Object",
      structure: {},
      required: true,
    },
    authors: {
      type: "Array",
      required: true,
    },
    canonical_link: {
      type: "string",
      required: true,
    },
    images: {
      type: "Array",
      required: true,
    },
    keywords: {
      type: "Array",
      required: true,
    },
    link_hash: {
      type: "string",
      required: true,
    },
    meta_data: {
      type: "Object",
      structure: {
        viewport: {
          type: "string",
          required: true,
        },
        section: {
          type: "string",
          required: true,
        },
        referrer: {
          type: "string",
          required: true,
        },
        og: {
          type: "Object",
          structure: {
            pubdate: {
              type: "string",
              required: true,
            },
            url: {
              type: "string",
              required: true,
            },
            title: {
              type: "string",
              required: true,
            },
            description: {
              type: "string",
              required: true,
            },
            site_name: {
              type: "string",
              required: true,
            },
            type: {
              type: "string",
              required: true,
            },
            image: {
              type: "Object",
              structure: {
                identifier: {
                  type: "string",
                  required: true,
                },
                width: {
                  type: "number",
                  required: true,
                },
                height: {
                  type: "number",
                  required: true,
                },
                alt: {
                  type: "string",
                  required: true,
                },
              },
              required: true,
            },
            locale: {
              type: "string",
              required: true,
            },
          },
          required: true,
        },
        description: {
          type: "string",
          required: true,
        },
        "theme-color": {
          type: "string",
          required: true,
        },
        article: {
          type: "Object",
          structure: {
            author: {
              type: "string",
              required: true,
            },
            section: {
              type: "string",
              required: true,
            },
            opinion: {
              type: "string",
              required: true,
            },
            "content-tier": {
              type: "string",
              required: true,
            },
          },
          required: true,
        },
        fb: {
          type: "Object",
          structure: {
            admins: {
              type: "number",
              required: true,
            },
            app_id: {
              type: "number",
              required: true,
            },
            pages: {
              type: "string",
              required: true,
            },
          },
          required: true,
        },
        pubdate: {
          type: "string",
          required: true,
        },
        lastmod: {
          type: "string",
          required: true,
        },
        author: {
          type: "string",
          required: true,
        },
        twitter: {
          type: "Object",
          structure: {
            title: {
              type: "string",
              required: true,
            },
            description: {
              type: "string",
              required: true,
            },
            card: {
              type: "string",
              required: true,
            },
            image: {
              type: "string",
              required: true,
            },
            creator: {
              type: "string",
              required: true,
            },
            domain: {
              type: "string",
              required: true,
            },
            site: {
              type: "string",
              required: true,
            },
          },
          required: true,
        },
        keywords: {
          type: "string",
          required: true,
        },
        thumbnail: {
          type: "string",
          required: true,
        },
        vr: {
          type: "Object",
          structure: {
            canonical: {
              type: "string",
              required: true,
            },
          },
          required: true,
        },
        "template-top": {
          type: "string",
          required: true,
        },
        "application-name": {
          type: "string",
          required: true,
        },
        "mobile-web-app-capable": {
          type: "string",
          required: true,
        },
        "msapplication-TileImage": {
          type: "string",
          required: true,
        },
        "msapplication-TileColor": {
          type: "string",
          required: true,
        },
        cleartype: {
          type: "string",
          required: true,
        },
      },
      required: true,
    },
    meta_description: {
      type: "string",
      required: true,
    },
    meta_favicon: {
      type: "string",
      required: true,
    },
    meta_img: {
      type: "string",
      required: true,
    },
    meta_keywords: {
      type: "Array",
      required: true,
    },
    meta_lang: {
      type: "string",
      required: true,
    },
    movies: {
      type: "Array",
      required: true,
    },
    publish_date: {
      type: "Date",
      required: false,
    },
    source_url: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    text: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    top_image: {
      type: "string",
      required: true,
    },
    url: {
      type: "string",
      required: true,
    },
  },
});


export default mongoose.model("Article", schema);
