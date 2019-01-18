export class Task {
id?: number;
title: string;
description?: string;
done: boolean;
subTasks?: Task[];
dueDate?: Date;
}
