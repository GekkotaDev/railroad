export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("layout", {
    description: "User Interface shell.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Layout name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "layouts/{{pascalCase name}}/{{pascalCase name}}.vue",
        templateFile: ".railroad/templates/layout/layout.vue.hbs",
      },
      {
        type: "add",
        path: "layouts/{{pascalCase name}}/{{pascalCase name}}.story.vue",
        templateFile: ".railroad/templates/layout/layout.story.vue.hbs",
      },
    ],
  })

  plop.setGenerator("provider", {
    description: "Data scoping mechanism.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Role of your provider?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "providers/provider/{{pascalCase name}}Provider.vue",
        templateFile: ".railroad/templates/provider/provider.vue.hbs",
      },
      {
        type: "add",
        path: "providers/context/{{kebabCase name}}-context.ts",
        templateFile: ".railroad/templates/provider/context.ts.hbs",
      },
      {
        type: "add",
        path: "providers/tests/{{kebabCase name}}-provider.test.ts",
        templateFile: ".railroad/templates/provider/provider.spec.ts.hbs",
      },
    ],
  })

  plop.setGenerator("route", {
    description: "Map a URL to a View.",
    prompts: [
      {
        type: "input",
        name: "route",
        message: "Route?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "routes/{{route}}.vue",
        templateFile: ".railroad/templates/route/route.vue.hbs",
      },
      {
        type: "add",
        path: "routes/{{route}}.story.vue",
        templateFile: ".railroad/templates/route/route.story.vue.hbs",
      },
    ],
  })

  plop.setGenerator("worker", {
    description: "Multi-processing.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Role of your worker?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "assets/workers/{{kebabCase name}}.ts",
        templateFile: ".railroad/templates/worker/worker.ts.hbs",
      },
      {
        type: "add",
        path: "assets/workers/{{kebabCase name}}.spec.ts",
        templateFile: ".railroad/templates/worker/worker.spec.ts.hbs",
      },
    ],
  })
}
