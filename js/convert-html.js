function convertHTML(str) {
  const string = str.replace(/&/g, '&amp;').replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
                    .replace(/'/g, '&apos;');

  return string;
}

convertHTML('Hamburgers < Pizza < Tacos > Fish');
