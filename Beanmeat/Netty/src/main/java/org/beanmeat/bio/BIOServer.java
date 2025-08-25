package org.beanmeat.bio;

import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class BIOServer {
    public static void main(String[] args) throws Exception {
        ExecutorService newCachedThreadPool = Executors.newCachedThreadPool();

        // 创建ServerSocket
        ServerSocket serverSocket = new ServerSocket(6666);

        System.out.println("server init..");

        while (true) {
            Socket accept = serverSocket.accept();
            System.out.println("connection a client");

            // 创建线程与之通信
            newCachedThreadPool.execute(() -> {
                handler(accept);
            });
        }
    }

    // 与客户端通信
    public static void handler(Socket socket) {
        try {
            System.out.println("Thread info: " + Thread.currentThread().getId() + "\t" + Thread.currentThread().getName());
            byte[] bytes = new byte[1024];
            InputStream inputStream = socket.getInputStream();

            // 循环读取客户端发送的数据
            while(true) {
                System.out.println("Thread info: " + Thread.currentThread().getId() + "\t" + Thread.currentThread().getName());
                int read = inputStream.read(bytes);
                if(read != -1) {
                    System.out.println(new String(bytes, 0, read));
                } else {
                    break;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            System.out.println("close socket...");
            try {
                socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
}
