import("@angular/platform-browser-dynamic").then(({ platformBrowserDynamic }) => {
  import("./app/app.module").then(({ AppModule }) => {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
});
