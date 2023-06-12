import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDir = path.join(process.cwd(), "src", "projects", "markdown");
export async function getProjects() {
  const filesName = fs.readdirSync(projectsDir).filter(fileName => fileName.endsWith('md'));

  const filesContents = filesName.map((file) => {
    const fullPath = path.join(projectsDir, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContent);
    return matterResult;
  });

  const projectsWithHtml = await Promise.all(
    filesContents.map(async (fileContent) => {
      const processedContent = await remark()
        .use(html)
        .process(fileContent.content);
      fileContent.html = processedContent.toString();
      return fileContent;
    })
  );

  fs.writeFileSync(
    "./src/projects/projects.json",
    JSON.stringify(projectsWithHtml)
  );

  return projectsWithHtml;
}

getProjects();
