import { Injectable } from '@nestjs/common';
import { log } from 'console';
const staticPosts = [
  {
    "slug": "how-to-create-a-folder-in-linux",
    "title": "Learn how to create a folder in Linux",
    "publishedAt": "2020-10-11T18:30:00.000Z",
    "author": 1,
    "status": "PUBLISHED"
  },
  {
    "slug": "how-to-turn-off-linux-machine-from-terminal",
    "title": "Learn how to turn off a Linux from the terminal",
    "publishedAt": "2021-11-11T18:30:00.000Z",
    "author": 1,
    "status": "PUBLISHED"
  },
  {
    "slug": "how-to-create-a-cron-job-in-linux",
    "title": "Learn how to create a cron job in Linux",
    "publishedAt": "2022-01-12T18:30:00.000Z",
    "author": 2,
    "status": "PUBLISHED"
  },
  {
    "slug": "how-to-send-a-broadcast-message-in-linux",
    "title": "Learn how to send a broadcast message in Linux",
    "publishedAt": "2022-02-22T18:30:00.000Z",
    "author": 3,
    "status": "PUBLISHED"
  },
  {
    "slug": "how-to-move-a-process-to-background-in-linux",
    "title": "Learn how to move a process to background in Linux",
    "publishedAt": "2020-04-21T18:30:00.000Z",
    "author": 3,
    "status": "DRAFT"
  },
  {
    "slug": "how-to-collect-memory-utilization-in-linux",
    "title": "Learn how to collect memory utilization metrics in Linux",
    "publishedAt": "2021-04-11T18:30:00.000Z",
    "author": 2,
    "status": "PROOF_READING"
  }
]
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBlogs(query: any): any {
    const { authorId, date } = query;
    console.log("authorId",authorId);
    console.log("date",date);
    const filteredPosts = staticPosts.filter((item) => {
      if (item.status != "PUBLISHED") return;
      if (authorId && authorId != item.author) return;
      if (date && new Date(date) > new Date(item.publishedAt)) return;
      return true
    })
    console.log(filteredPosts)
    return filteredPosts;
  }
}
