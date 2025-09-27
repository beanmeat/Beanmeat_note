package com.io.bio;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

/**
 * 单线程服务器
 */
public class SocketServerSingleThread {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(9090);
        while (true) {
            System.out.println("wait for client connection...");
            // 阻塞等待客户端的连接
            Socket socket = serverSocket.accept();
            System.out.println("connection a client...");

            InputStream inputStream = socket.getInputStream();
            byte[] bytes = new byte[1024];

            // 阻塞的等待客户端向io流通道中写数据
            int len = inputStream.read(bytes);
            System.out.println("receive client data: " + new String(bytes, 0, len));

            // 服务端返回信息给客户端
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write("success".getBytes());
            outputStream.flush();
        }
    }
}
