export class StorybookFrontLoaderPlugin {
  apply(compiler) {
    const { webpack } = compiler;
    const { Compilation } = webpack;
    const { RawSource } = webpack.sources;

    compiler.hooks.thisCompilation.tap(
      'StorybookFrontLoaderPlugin',
      (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: 'StorybookFrontLoaderPlugin',
            stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
          },
          (assets) => {
            const iframeRawContent =
              compilation.getAsset('iframe.html').source._value;

            const fontAssets = Object.keys(assets)
              .filter((name) => name.endsWith('woff2'))
              .map((path) => {
                return `<link rel="preload" href="/${path}" as="font" type="font/woff2" crossorigin="anonymous" />`;
              })
              .join('');

            const newContent = iframeRawContent.replace(
              '</head>',
              `${fontAssets}</head>`,
            );

            compilation.updateAsset('iframe.html', new RawSource(newContent));
          },
        );
      },
    );
  }
}
